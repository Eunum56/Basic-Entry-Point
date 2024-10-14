import { GenerateCookie } from "../cookie/GenerateCookie.js";
import User from "../models/user.model.js";
import bcrypt from 'bcrypt'

const HandleSignup = async (req, res) => {
    try {
        const { name, username, email, password } = req.body

        const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailFormat.test(email)) {
            return res.status(400).json({ Email: "Invalid email format" })
        }

        const existUsername = await User.findOne({ username })
        if (existUsername) {
            return res.status(400).json({ Username: "Username is already taken" })
        }

        const existEmail = await User.findOne({ email })
        if (existEmail) {
            return res.status(400).json({ Registered: "Email is already Registered" })
        }

        if (password.length < 6) {
            return res.status(400).json(({ Password: "Password length must be atleast 6 characters long" }))
        }

        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        const NewUser = new User({
            name,
            username,
            email,
            password: hashPassword
        })
        const cookieUser = {
            name,
            email
        }
        if (NewUser) {
            GenerateCookie(cookieUser, res)
            await NewUser.save()
            res.status(201).json({ Success: "Account Created Successfully" })
        } else {
            res.status(400).json({ InvalidUser: "Invalid User Data" })
        }

    } catch (error) {
        console.log("Error in signup controller", error.message)
        res.status(500).json({ Error: "Internal server ERROR" })
    }
}


export default HandleSignup