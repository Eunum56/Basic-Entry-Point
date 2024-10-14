import jwt from 'jsonwebtoken'

const protectDashboard = async (req, res, next) => {
    try {
        const token = req.cookies.jwt
        if (!token) {
            return res.status(401).json({ error: "You need to SignUp or Login first" })
        }

        const secret = process.env.JWT_TOKEN;
        if (!secret) {
            return res.status(500).json({ error: "JWT secret is not configured" });
        }

        jwt.verify(token, process.env.JWT_TOKEN, (err, user) => {
            if (err) {
                return res.status(403).json({ error: "Token is invalid" });
            }
            req.user = user
            next()
        })


    } catch (error) {
        return res.status(500).json({ error: "Internal server error" })
    }
}

export default protectDashboard
