const port = 5000
const express = require('express')
const app = express()
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./routes/UserRoute")
const bodyParser = require('body-parser');

const connectDatabase = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/StudyApp")
        console.log("connected")
    }
    catch (error) {
        console.error(error)
    }
}
connectDatabase()

app.use(express.json())
app.use(cors());
app.use('/api', userRoute)



app.listen(port)