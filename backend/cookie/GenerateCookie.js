import jwt from 'jsonwebtoken'

export const GenerateCookie = (user, res) => {
    try {
        const token = jwt.sign({ email: user.email, name: user.name }, process.env.JWT_TOKEN, { expiresIn: '1d' })

        res.cookie("jwt", token, {
            maxAge: 24 * 60 * 60 * 1000,
            httpOnly: true,
            sameSite: "strict",
            secure: process.env.NODE === 'production',
            path: "/"
        })
    } catch (error) {
        console.log(`Error while setting the cookie ${error.message}`)
        res.status(500).json({ error: "Internal server error" })
    }

}