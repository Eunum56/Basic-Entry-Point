import jwt from 'jsonwebtoken'
const checkLogin = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({ message: "You can Login" })
        }

        const secret = process.env.JWT_TOKEN;
        if (!secret) {
            return res.status(500).json({ error: 'JWT token is not configured' })
        }

        jwt.verify(token, secret, (err) => {
            if (err) {
                return res.status(403).json({ error: "Invalid token" })
            }
            next()
        })
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" })
    }
}

export default checkLogin