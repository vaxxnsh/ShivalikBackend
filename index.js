const express = require("express")
const app = express()
const attrouter =  require("./Router/AttendanceRouter.js")
const mongoose = require("mongoose")
const bodyparser = require("body-parser")
const cors = require("cors")
app.use(bodyparser.json())
app.use(cors())
try {
mongoose.connect("mongodb://127.0.0.1:27017/attendance")
console.log("db connected")
} catch (error) {
    console.log(error)
}


app.use("/" , attrouter)












app.listen(8000 , () => {
    console.log("server connected")
})