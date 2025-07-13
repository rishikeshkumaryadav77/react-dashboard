import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import cors from "cors"
import router from "./routes/userRoute.js"

const app = express()
app.use(bodyParser.json())
app.use(cors())
dotenv.config()

const PORT = process.env.PORT || 4000
const MONGOURL = process.env.MONGOURL

mongoose.connect(MONGOURL).then(()=> console.log("DB connected")).catch(err => console.log(err))

app.use("/api", router)

app.get("/", (req, res)=>{
  res.send("Hello, World!")
})

app.listen(PORT,() => {
  console.log(`Server is running on port ${PORT}`)
})