const express=require('express')
const User=require('../../model/user')
const router=express.Router()
router.get("/",async(req,res)=>{
    try {
        
        return res.status(200).json({
            msg:"success"
        })
    } catch (err) {
        console.log(err.message)
        return res.status(400).json({
            msg:"error",
            error:err.message
        })
    }
})
router.get("/login",async(req,res)=>{
    try {
        return res.status(200).json({
            msg:"success"
        })
    } catch (err) {
        console.log(err.message)
        return res.status(400).json({
            msg:"error",
            error:err.message
        })
    }
})
router.get("/signup",async(req,res)=>{
    try {
        return res.status(200).json({
            msg:"success"
        })
    } catch (err) {
        console.log(err.message)
        return res.status(400).json({
            msg:"error",
            error:err.message
        })
    }
})
router.get("/forget_password",async(req,res)=>{
    try {
        return res.status(200).json({
            msg:"success"
        })
    } catch (err) {
        console.log(err.message)
        return res.status(400).json({
            msg:"error",
            error:err.message
        })
    }
})
module.exports=router