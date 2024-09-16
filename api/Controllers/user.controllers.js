import asynchandler from "express-async-handler"
import { User } from "../models/User.model.js";
import generatedToken from "../tokengenerator.js";
import jwt from "jsonwebtoken";


const login= asynchandler( async(req,res) => {

    const {email, password}= req.body;
    const user =await User.findOne({email});

    console.log(user);

    const passwordMatched = await user.matchPassword(password);

    if(!user){
        res.status(401);
        throw new Error("Invalid email");
    }
    if(!passwordMatched){
        res.status(401);
        throw new Error("Invalid password");
    }


    const token = jwt.sign({ id:user._id },process.env.JWT_Secret,{ expiresIn: '1h' });

    return res.cookie("token",token, {
        httpOnly: true, 
        sameSite: 'strict', 
        maxAge: 3600000  
    }).json({
        user
    });

    
});




const register = asynchandler( async(req,res)=> {

    const {name,email,password}= req.body;

    const exists =await User.findOne({email})

    if(exists){
    res.status(401)
    throw new Error("User already exisits")
    }

    const user = await User.create({name, email, password});

    if(!user){
    res.status(401)
    throw new Error("Invalid user data")}

    return res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            createdAt: user.createdAt,
}) 

});


const profile = asynchandler( async(req,res) => {

    console.log(req.user);
    
    const user=await User.findById(req.id);

    
    

    if(! user){
        res.status(400);
        throw new Error("User not found");
        }



        return res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            createdAt: user.createdAt,
}) 
});


const profileUpdate = asynchandler(async(req,res) => {

    const {name,email,password}= req.body

    
    // console.log(name,email,password);
    

    const user=await User.findById(req.id);

    if(!user){
        res.status(401)
        throw new Error("User not found");
        }


    user.name=name?name:user.name;
    user.email=email?email:user.email;
    user.password=password?password:user.password;

    const Updateduser= await user.save();

    const updateduser= await User.findById(req.id).select("-password");

    // console.log(user);

    return res.status(200).json(updateduser);
});



    





export {login,register,profile,profileUpdate}