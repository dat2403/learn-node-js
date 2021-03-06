import express from 'express'
import 'dotenv/config'
import mongoose from 'mongoose'
import authRoute from "./src/routes/authRoute.js";
import postRoute from "./src/routes/postRoute.js";
import novelRoute from "./src/routes/novelRoute.js";
import {saveToDatabase} from "./src/crawler/crawler.js";
await connectDb()

const app = express()
app.use(express.json())

app.use("/api/v1/auth", authRoute)
app.use("/api/v1/post", postRoute)
app.use("/api/v1/novels", novelRoute)
// await saveToDatabase()
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server start at port ${PORT}`)
})

async function connectDb() {
    try {
        const dbUserName = process.env.DB_USERNAME
        const dbPwd = process.env.DB_PWD
        await mongoose.connect(`mongodb+srv://hoangtiendat2403:zrGXQ7mjfwnQf4de@cluster0.jckjo.mongodb.net/todoDatabase?retryWrites=true&w=majority`)
        console.log("Connected to database")
    } catch (e) {
        console.log("Cannot connect to database, exit")
        process.exit(1)
    }
}
