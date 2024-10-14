import User from "../models/user.model.js";
import { GenerateCookie } from "../cookie/GenerateCookie.js";
import bcrypt from 'bcrypt'

const HandleLogin = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        let user = await User.findOne({ username });

        if (username) {
            user = await User.findOne({ username });
        } else if (email) {
            user = await User.findOne({ email });
        }

        if (!user) {
            return res.status(400).json({ Details: "Invalid username or email" });
        }

        const isPasswordMatch = await bcrypt.compare(password, user?.password || '');
        if (!isPasswordMatch) {
            return res.status(400).json({ Password: "Invalid password" });
        }
        const cookieUser = {
            name: user.name,
            email: user.email
        }
        GenerateCookie(cookieUser, res);
        return res.status(200).json({ Success: "Login successfully" });

    } catch (error) {
        console.log("Error in login controller:", error.message);
        return res.status(500).json({ Error: "Internal server error" });
    }
}

export default HandleLogin;
