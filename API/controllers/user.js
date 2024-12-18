import {User} from "../Models/User.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


export const register =async (req,res)=>{
    const {name,gmail,password}=req.body;
   
    try{
        let user=await User.findOne({gmail});

        if(user) return res.json({message:"user already exists"});

        const hashPass=await bcrypt.hash(password,10)

        user=await User.create({name,gmail,password:hashPass})
        res.json({message:"User registered successfully",user})
    }catch(error){
        register.json({message:error})
    }

}

export const login=async (req,res) =>{
        const {gmail,password}=req.body

        try{
            let user=await User.findOne({gmail});

            if(!user) return res.json({message:"User not exists"})

            const validPass = await bcrypt.compare(password,user.password)

            if(!validPass) return res.json({message:"Invalid credentials"});

            const token =jwt.sign({userId:user._id },"!@#$",{
                expiresIn:"2d"
            })

            res.json({message:`welcome ${user.name}`,token})

        }catch(error){
            res.json({message:error.message})
        }
}

export const profile =async(req,res)=>{
    res.json({user:req.user})
}