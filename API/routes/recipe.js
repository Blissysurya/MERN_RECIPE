import express from "express";
import { add, getAllRecipe, getRecipeById, getRecipeByUserId, getSavedRecipe, savedRecipeById } from "../controllers/recipe.js";
const router=express.Router();

router.post('/add',add)

router.get('/',getAllRecipe)

router.get('/saved',getSavedRecipe)

router.get('/:id',getRecipeById)



router.get('/user/:id',getRecipeByUserId)

router.post('/:id',savedRecipeById);


export default router