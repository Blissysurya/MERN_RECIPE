// import {User} from "../Models/User.js"
// import jwt from 'jsonwebtoken'

// export const Authenticate = async (req,res,next) =>{

//         const token = req.header("Auth")
//         try {
//             if(!token) return res.json({message: "login first"})

//              const decode= jwt.verify(token,"!@#$") ;
             
//         //      console.log("this is decoded data",decode);

//         const id=decode.userId

//         let user= await User.findById(id)

//         if(!user) return res.json({message:"User not exist"});

//         req.user = user;
//         next();
             
//         } catch (error) {
//                 res.json({message:error})
//         }
// }   

import { User } from "../Models/User.js";
import jwt from "jsonwebtoken";

export const Authenticate = async (req, res, next) => {
    const token = req.header("Auth");
    try {
        if (!token) return res.status(401).json({ message: "login first" });

        const decode = jwt.verify(token, "!@#$"); // Secret key remains hardcoded

        const id = decode.userId;

        let user = await User.findById(id);

        if (!user) return res.status(404).json({ message: "User not exist" });

        req.user = user;
        next();
    } catch (error) {
        res.status(403).json({ message: "Invalid or expired token" }); // Replaced raw error exposure
    }
};
