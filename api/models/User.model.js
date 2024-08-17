import mongoose from "mongoose";


const User_Schema= new mongoose.Schema({
    name: {
        type: String,
        requied: true
    },
    email: {
        type: String,
        requied: true,
        unique: true
    },
    password: {
        type: String,
        requied: true,
    },
    isAdmin:{
        type: Boolean,
        default: false
    }
},{timestamps: true})


export const User=mongoose.model("User",User_Schema)