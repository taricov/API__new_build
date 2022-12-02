const express = require("express")
const modelProduct = require("../models/Product")
const routeProducts = express.Router()

routeProducts.get("/", (req, res) => {
    res.send({ body: "hellllllllllo from products" })
})



module.exports = routeProducts
