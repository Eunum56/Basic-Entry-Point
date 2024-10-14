import express from "express";
import HandleSignup from "../Controllers/HandleSignup.js";
import HandleLogin from '../Controllers/HandleLogin.js'
import HandleLogout from '../Controllers/HandleLogout.js'

const authroutes = express.Router()

authroutes.post('/signup', HandleSignup)

authroutes.post('/login', HandleLogin)

authroutes.post('/logout', HandleLogout)


export default authroutes