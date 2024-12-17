import express from "express";
import { add, getAllRecipe } from "../controllers/recipe.js";
const router=express.Router();

router.post('/add',add)

router.get('/',getAllRecipe)

export default router