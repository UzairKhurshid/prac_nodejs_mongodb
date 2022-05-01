const express=require('express')
const User=require("../../model/user")
const Project=require("../../model/project")
const router=new express.Router()
router.get("/get_all_users",async(req,res)=>{
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