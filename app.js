
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const dotenv = require("dotenv")
const path = require("path")


dotenv.config({ path: "./config/config.env" })
const db = require("./config/db")

db()

const app = express()

app.use(express.json())
app.use(morgan("dev"))
app.use(cors())
app.use("/static", express.static(path.join(__dirname, "public")))

app.get('/', (req, res) => {
    res.send("Iam it!")
})

app.listen(process.env.PORT, () => {
    console.log("server is here!!!!")
})