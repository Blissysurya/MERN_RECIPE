// import { Recipe } from "../Models/Recipe.js";
// import {SavedRecipe} from '../Models/SavedRecipe.js'

// import {Authenticate } from '../middlewares/auth.js'

// export const add=async (req,res)=>{
//     const {title,ist,ing1,ing2,ing3,ing4,qty1,qty2,qty3,qty4,imgurl}=req.body;

//     try{
//             const recipe=await Recipe.create({title,ist,ing1,ing2,ing3,ing4,qty1,qty2,qty3,qty4,imgurl ,user:req.user
//             });

//             res.json({message:"Recipe created successfully."})
//     }catch(error){
//             res.json({message:error})
//     }
// }

// export const getAllRecipe = async (req,res) =>{
//         const recipe=await Recipe.find();
//         res.json({recipe});
// }

// export const getRecipeById = async (req,res) =>{

//         const id =  req.params.id;

//         try{
//                 let recipe=await Recipe.findById(id);

//                 if(!recipe) res.json({message:"recipe not exists"})

//                 res.json({message:"recipeById",recipe})
//         }catch(error){
//                 res.json({message:error})
//         }       
// }

// export const getRecipeByUserId = async (req,res) => {
//         const userId = req.params.id;

//         try{
//                 let recipe=await Recipe.find({user:userId});

//                 if(!recipe) res.json({message:"recipe not exists"})

//                 res.json({message:"recipe by user Id",recipe})
//         }catch(error){
//                 res.json({message:error})
//         }  
// }

// export const savedRecipeById = async (req,res) =>{
//         const id=req.params.id
//         let recipe= await SavedRecipe.findOne({recipe:id});

//         if(recipe) return res.json({message:"recipe already saved"})

//         recipe=await SavedRecipe.create({recipe:id});

//         res.json({message:"Recipe saved successfully"})

// }

// export const getSavedRecipe= async (req,res) =>{
//         const recipe= await SavedRecipe.find();

//         res.json({recipe})
// }
import { Recipe } from "../Models/Recipe.js";
import { SavedRecipe } from "../Models/SavedRecipe.js";
import { Authenticate } from "../middlewares/auth.js";

// Add Recipe
export const add = async (req, res) => {
    const { title, ist, ing1, ing2, ing3, ing4, qty1, qty2, qty3, qty4, imgurl } = req.body;

    try {
        const recipe = await Recipe.create({
            title,
            ist,
            ing1,
            ing2,
            ing3,
            ing4,
            qty1,
            qty2,
            qty3,
            qty4,
            imgurl,
            user: req.user,
        });

        res.json({ message: "Recipe created successfully." });
    } catch (error) {
        res.json({ message: error });
    }
};

// Get All Recipes
export const getAllRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.find();
        res.json({ recipe });
    } catch (error) {
        res.json({ message: error });
    }
};

// Get Recipe by ID
export const getRecipeById = async (req, res) => {
    const id = req.params.id;

    try {
        let recipe = await Recipe.findById(id);

        if (!recipe) {
            return res.json({ message: "Recipe does not exist." });
        }

        res.json({ message: "Recipe found by ID", recipe });
    } catch (error) {
        res.json({ message: error });
    }
};

// Get Recipe by User ID
export const getRecipeByUserId = async (req, res) => {
    const userId = req.params.id;

    try {
        let recipe = await Recipe.find({ user: userId });

        if (!recipe || recipe.length === 0) {
            return res.json({ message: "No recipes found for this user." });
        }

        res.json({ message: "Recipes by User ID", recipe });
    } catch (error) {
        res.json({ message: error });
    }
};

// Save Recipe by ID
export const savedRecipeById = async (req, res) => {
    const id = req.params.id;

    try {
        let recipe = await SavedRecipe.findOne({ recipe: id });

        if (recipe) {
            return res.json({ message: "Recipe is already saved." });
        }

        recipe = await SavedRecipe.create({ recipe: id });

        res.json({ message: "Recipe saved successfully." });
    } catch (error) {
        res.json({ message: error });
    }
};

// Get Saved Recipes
export const getSavedRecipe = async (req, res) => {
    try {
        const recipe = await SavedRecipe.find();
        res.json({ recipe });
    } catch (error) {
        res.json({ message: error });
    }
};
