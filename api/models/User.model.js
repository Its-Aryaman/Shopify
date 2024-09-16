import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

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



User_Schema.methods.matchPassword= async function name(password) {

    return await bcrypt.compare(password,this.password)
    
}


User_Schema.pre('save', async function name(next) {
    if(!this.isModified('password')){
        return next()}
    
    try {
        const salt= await bcrypt.genSalt(10);
        this.password= await bcrypt.hash(this.password,salt);
        next();

        
    } catch (error) {
    next(error)
        
    }
    
})

export const User=mongoose.model("User",User_Schema)