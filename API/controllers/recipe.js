import { Recipe } from "../Models/Recipe.js";

export const add=async (req,res)=>{
    const {title,ist,ing1,ing2,ing3,ing4,qty1,qty2,qty3,qty4,imgurl}=req.body;

    try{
            const recipe=await Recipe.create({title,ist,ing1,ing2,ing3,ing4,qty1,qty2,qty3,qty4,imgurl ,user:'6761d76fa576851de8ac374b'
            });

            res.json({message:"Recipe created successfully."})
    }catch(error){
            res.json({message:error})
    }
}

export const getAllRecipe = async (req,res) =>{
        const recipe=await Recipe.find();
        res.json({recipe});
}