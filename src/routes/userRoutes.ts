import { Router } from "express";
import User from "../models/userModel";

const router = Router();

router.post('/users',async(req,res)=>{
    try{
        const {name,email} = req.body;
        const newUser = await User.create({name, email});
        res.status(201).json(newUser)
    }catch(error){
        res.status(500).json({ message: error });
    }
})

router.get('/users/get',async (req,res)=>{
    try{
        const users = await User.find();
        res.status(200).json(users);
    }catch(error){
        res.status(500).json({ message: error });
    }
})

export default router;