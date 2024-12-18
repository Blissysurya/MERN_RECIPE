import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.js"
import bodyParser from "express"
import recipeRouter from './routes/recipe.js'

const app=express();
app.use(bodyParser.json());

app.use("/api",userRouter)

app.use("/api",recipeRouter)

mongoose.connect("mongodb+srv://suryanshdixit4924dpsjkp:jyaxY1dDzKS4fR1V@cluster0.z2u0g.mongodb.net/",{
    dbName:"recipe"
}).then(()=> console.log("MongoDB is connected."))
.catch((err)=>console.log(err.message));

const port=3000;

app.listen(port,()=>{console.log(
    `Server running on port : ${port}`
)})