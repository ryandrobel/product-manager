const mongoose =  require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required."],
        minlenght: [2, "Title must be at least 2 characters long."]
    },
    price: {
        type: Number,
        required: [true, "Price is required."],
        minlenght: [4, "Price Must be written in 0.00 format."]
    },
    description:{
        type: String, 
        required: [true, "Description is required."],
        minlength: [8, "Description must be at least 20 characters long."]
    }
})

const Product =  mongoose.model("Product", ProductSchema);

module.exports =  Product;