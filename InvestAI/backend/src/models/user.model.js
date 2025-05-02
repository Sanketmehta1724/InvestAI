import mongoose from "mongoose";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  username: {type:String,required:true,unique:true},
  password: { type: String, required: true },
  phoneNumber: { type: String, required: false },

  investmentProfile: {
    riskAppetite: { type: String, enum: ["Low", "Medium", "High"], required: true,default:"Low" },
    experience: { type: String, enum: ["Beginner", "Intermediate", "Advanced"], required: true,default: "Beginner"},
    goals: [{ type: String }], // Array of goals
    preferredAssets: [{ type: String }] // Stocks, Crypto, etc.
  },

  financialInfo: {
    annualIncome: { type: Number, required: false },
    investmentBudget: { type: Number, required: false },
    taxBracket: { type: String, required: false }
  },
  refreshToken:{
    type:String
}
},{timestamps:true});

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});


userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id:this._id,
            email:this.email,
            username:this.username,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id:this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}



export const User = mongoose.model("User", userSchema);


