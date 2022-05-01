const mongoose=require('mongoose')
const validator=require('validator')
const projectSchema=new mongoose.Schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
    owner:{
        type:String, 
        ref:"User"
    }
})
const Project=mongoose.model("Project",projectSchema)
module.exports=Project