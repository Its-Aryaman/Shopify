import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";

const authMiddleware = asyncHandler(async (req, res, next) => {
    
    const authHeader = req.cookies.token;  
  
    

    if (!authHeader) {
        return res.status(401).json({ message: "Access Denied. No token provided." });
    }

   
    const token = authHeader.replace('Bearer ', ''); 

    if (!token) {
        return res.status(401).json({ message: "Access Denied. No token provided." });
    }

    try {
       
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // req.user= await User.findById(decoded.id).select("-password");
        req.id = decoded.id;
        // console.log(req.id);
        next(); 
    } catch (error) {
        res.status(400).json({ message: "Invalid token." }); 
    }
});

export default authMiddleware;
