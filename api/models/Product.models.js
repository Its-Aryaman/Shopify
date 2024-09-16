import mongoose from "mongoose";



const review_Schema= new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    user:
    {
        ref: "User",
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
})

const product_schema= new mongoose.Schema(
{
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    price: {
        type: Number,
        required: true
    },
    instock: {
        type: Number,
        required: true,
        default: 0
    },
    reviews: [review_Schema]
},{timestamps: true});




export const Product= mongoose.models.Product || mongoose.model("Product",product_schema)