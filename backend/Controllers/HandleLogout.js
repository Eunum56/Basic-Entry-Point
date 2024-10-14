const HandleLogout = async (req, res) => {
    try {
        res.cookie("jwt", "", {
            httpOnly: true,
            secure: process.env.NODE === 'production',
            sameSite: "strict",
            maxAge: 0,
        });
        res.status(200).json({ message: "Logout successfully" })
    } catch (error) {
        console.log(`Error in logout controller ${error.message}`)
        res.status(500).json({ Error: "Internal server error" })
    }
}

export default HandleLogout