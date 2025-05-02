import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import {User} from "../models/user.model.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken"


const generateAccessAndRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId)
        console.log(user)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()
        user.refreshToken = refreshToken
        await user.save({validateBeforeSave:false})

        return {accessToken,refreshToken}

    } catch (error) {
        console.log(error)
        throw new ApiError(500,"Something went wrong while generating refresh and access token")
    }
}

const registerUser = asyncHandler(async (req, res) => {
  const {
    fullName,
    username,
    email,
    password,
    phoneNumber,
    riskAppetite,
    experience,
    goals,
    preferredAssets,
    annualIncome,
    investmentBudget,
    taxBracket,
    termsAgreed
  } = req.body;

  console.log("Received Registration Data:", req.body);

  // Validation: Check if essential fields are present
  if (!fullName || !email || !password || !username) {
    throw new ApiError(400, "Full Name, Email, Password, and Terms Agreement are required.");
  }

  // Check if user already exists
  const existedUser = await User.findOne({
    $or: [{ email }]
  });

  if (existedUser) {
    throw new ApiError(409, "User with this email already exists.");
  }

  // Create user
  const user = await User.create({
    fullName,
    username,
    email,
    password,
    phoneNumber,
    investmentProfile: {
      riskAppetite,
      experience,
      goals,
      preferredAssets
    },
    financialInfo: {
      annualIncome,
      investmentBudget,
      taxBracket
    }
  });

  const createdUser = await User.findById(user._id).select("-password -refreshToken");

  if (!createdUser) {
    throw new ApiError(500, "Error occurred while creating user.");
  }

  return res.status(201).json(new ApiResponse(200, createdUser, "User registered successfully"));
});



const loginUser = asyncHandler(async (req,res) => {
    //req body take data
    //username or email
    //find the user
    // password check
    //access and refresh token 
    // send cookies

    const  {username,password} = req.body

    if (!username) {
        throw new ApiError(400,"username  is required")
    }

    const user = await User.findOne({
       username:username
    })

    if (!user) {
        throw new ApiError(404,"user doest not exist")
    }
    
    const isPasswordvalid = await user.isPasswordCorrect(password)
    
    if (!isPasswordvalid) {
        throw new ApiError(401,"Invalid user Credentials")
    }
    
    console.log(isPasswordvalid)


    const {accessToken,refreshToken} = await generateAccessAndRefreshToken(user._id)

   const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
   )

   const options = {
    httpOnly: true,
    secure:true
   }

    return res.status(200).cookie("accessToken",accessToken,options)
    .cookie("refreshToken",refreshToken,options)
    .json(
        new ApiResponse(
            200,
            {
                user:loggedInUser , accessToken, refreshToken
            },
            "User Logged in successfully"
        )
    )

})


const logoutUser = asyncHandler(async (req,res) => {
    await User.findByIdAndUpdate(
         req.user._id,
         {
             $set : {
                 refreshToken: undefined
             }
         },
         {
             new:true
         }
     )
 
     const options = {
         httpOnly: true,
         secure:true
        }
 
     return res.status(200)
     .clearCookie("accessToken",options)
     .clearCookie("refreshToken",options)
     .json(
         new ApiResponse(200, {} ,"User logged out")
     )
 })
 
 
 // Get User Profile
 const getUserProfile = asyncHandler(async (req, res) => {
   const user = await User.findById(req.user._id).select("-password -refreshToken");
 
   if (!user) {
     throw new ApiError(404, "User not found");
   }
 
   return res.status(200).json(new ApiResponse(200, user, "User profile fetched successfully"));
 });
 
 // Update User Profile
 const updateUserProfile = asyncHandler(async (req, res) => {
   const { fullName, phoneNumber, investmentProfile, financialInfo } = req.body;
   
   const user = await User.findByIdAndUpdate(
     req.user._id,
     { $set: { fullName, phoneNumber, investmentProfile, financialInfo } },
     { new: true, runValidators: true }
   ).select("-password -refreshToken");
 
   if (!user) {
     throw new ApiError(404, "User not found");
   }
 
   return res.status(200).json(new ApiResponse(200, user, "User profile updated successfully"));
 });
 
 // Delete User
 const deleteUser = asyncHandler(async (req, res) => {
   const user = await User.findByIdAndDelete(req.user._id);
 
   if (!user) {
     throw new ApiError(404, "User not found");
   }
 
   return res.status(200).json(new ApiResponse(200, {}, "User deleted successfully"));
 });
 
 // Refresh Access Token
 const refreshToken = asyncHandler(async (req, res) => {
   const token = req.cookies.refreshToken;
 
   if (!token) {
     throw new ApiError(401, "Refresh token not provided");
   }
 
   try {
     const decoded = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
     const user = await User.findById(decoded._id);
 
     if (!user || user.refreshToken !== token) {
       throw new ApiError(403, "Invalid refresh token");
     }
 
     const accessToken = user.generateAccessToken();
     return res.status(200).json(new ApiResponse(200, { accessToken }, "Access token refreshed successfully"));
   } catch (error) {
     throw new ApiError(403, "Invalid or expired refresh token");
   }
 });
 
 // Change Password
 const changePassword = asyncHandler(async (req, res) => {
   const { oldPassword, newPassword } = req.body;
   const user = await User.findById(req.user._id);
 
   if (!user || !(await user.isPasswordCorrect(oldPassword))) {
     throw new ApiError(401, "Invalid old password");
   }
 
   user.password = newPassword;
   await user.save();
 
   return res.status(200).json(new ApiResponse(200, {}, "Password changed successfully"));
 });
 
 // Forgot Password (Generate OTP)
 const forgotPassword = asyncHandler(async (req, res) => {
   const { email } = req.body;
   const user = await User.findOne({ email });
 
   if (!user) {
     throw new ApiError(404, "User not found");
   }
 
   const otp = Math.floor(100000 + Math.random() * 900000).toString();
   // Store the OTP securely (e.g., Redis or DB) with expiry logic
 
   return res.status(200).json(new ApiResponse(200, { otp }, "OTP sent successfully"));
 });
 
 // Reset Password
 const resetPassword = asyncHandler(async (req, res) => {
   const { email, otp, newPassword } = req.body;
 
   // Validate OTP (Assuming OTP verification logic)
 
   const user = await User.findOne({ email });
 
   if (!user) {
     throw new ApiError(404, "User not found");
   }
 
   user.password = newPassword;
   await user.save();
 
   return res.status(200).json(new ApiResponse(200, {}, "Password reset successfully"));
 });
 
 

export {registerUser,loginUser,logoutUser, getUserProfile, updateUserProfile, deleteUser, refreshToken, changePassword, forgotPassword, resetPassword}