import express from 'express'
// import { register,login, profile } from '../controllers/user.js';
// import { Authenticate } from '../middlewares/auth.js';

const router = express.Router();

// user register
router.post("/register", (req,res)=>{
    const {name,gmail,password}=req.body;

    console.log(req.body);
});

// user login
// router.post('/login',login)

// profile

// router.get('/user',Authenticate,profile)


export default router