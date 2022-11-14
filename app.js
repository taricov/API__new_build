
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const { format } = require("path")

const app = express()

app.use(express.json())
app.use(morgan("dev"))
app.use(cors())

app.get('/', (req, res) => {
    res.send("Iam it!")
})


app.listen(10000,
    () => console.log("fuck u!!"))