import express from "express"
import protectDashboard from "../Middlewares/protectDashboard.js"
import userDashboard from "../Controllers/userDashboard.js"
import checkSignup from "../Middlewares/checkSignup.js"
import useSignup from "../Controllers/useSignup.js"
import checkLogin from "../Middlewares/checkLogin.js"
import useLogin from "../Controllers/useLogin.js"

const userRoutes = express.Router()

userRoutes.get('/dashboard', protectDashboard, userDashboard)
userRoutes.get('/signup', checkSignup, useSignup)
userRoutes.get('/login', checkLogin, useLogin)

export default userRoutes