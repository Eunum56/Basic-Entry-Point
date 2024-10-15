import express from 'express'
import { configDotenv } from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import connectDB from './connectDB/connectDB.js '
import authroutes from './Routes/auth.route.js'
import userRoutes from './Routes/authorised.route.js'
import path from 'path'

// const corsOptions = {
//     origin: ['http://localhost:4000', 'http://localhost:5173'],
//     methods: ['GET', 'POST'],
//     credentials: true,
// };

const dirname = path.resolve()

const app = express()
configDotenv()

app.use(express.json())
app.use(cors());
app.use(cookieParser())


app.use("/api", authroutes)
app.use("/api/user", userRoutes)

if (process.env.NODE === 'production') {
    app.use(express.static(path.join(dirname, "/frontend/dist")))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(dirname, "frontend", "dist", "index.html"))
    })
}


const PORT = process.env.PORT || 3020
app.listen(PORT, () => {
    connectDB()
    console.log(`Server is running at ${PORT}`)
})