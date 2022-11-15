const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please Enter a Title"]
    },
    category: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "category"
    }],
    description: {
        type: String,
        required: [true, "Please Enter a Description"]
    },
    shortDescription: {
        type: String,
        required: false
    },
    mainImage: {
        type: String,
        required: false,
    },
    images: [{
        type: String,
        required: false
    }],
    price: {
        type: Number,
        required: [true, "Please Enter a Price"]
    },
    onSale: {
        type: Boolean,
        default: false,
        required: false

    },
    salePrice: {
        type: Number,
        default: 0,
        required: false,
    }
})