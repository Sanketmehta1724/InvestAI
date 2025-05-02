import { Router } from "express";
import { verifyJWT } from "../middleware/auth.middleware.js";
import {registerUser,loginUser,logoutUser,getUserProfile, 
    updateUserProfile, 
    deleteUser, 
    refreshToken, 
    changePassword, 
    forgotPassword, 
    resetPassword } from "../controllers/user.controller.js"


const router =Router()


router.route("/register").post(registerUser)

router.route("/login").post(loginUser)

//secured routes

router.route("/logout").post(
    verifyJWT,
    logoutUser)


    router.get('/profile', verifyJWT, getUserProfile);
    router.put('/profile', verifyJWT, updateUserProfile);
    router.delete('/profile', verifyJWT, deleteUser);
    router.post('/change-password', verifyJWT, changePassword);
    router.post('/refresh-token', refreshToken);
    
    // Public Routes
    router.post('/forgot-password', forgotPassword);
    router.post('/reset-password', resetPassword);
    

export default router