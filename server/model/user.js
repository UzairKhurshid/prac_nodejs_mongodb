const mongoose=require('mongoose')
const bcrypt=require('bcryptjs')
const validator=require('validator')
const Project=require('./project')
const userSchema=new mongoose.Schema({
    first_name:{
        type:String,
        required: true,
        trim: true,
    },
    last_name:{
        type:String,
        required: true,
        trim: true,
    },
    email:{
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    phone:{
        type:String
    },
    projects:[{
        type:String,
        ref:"Project"
    }],
    password:{
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    avatar:{
        type:String
    }
})
userSchema.methods.getrequiredData=function(){
    const user=this
    const userObj=user.toObject()
    delete userObj.password
    return userObj
}
userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })
    if (!user) {
        throw new Error('User not found!')
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
        throw new Error('Invalid Password!')
    }
    return user
}
userSchema.pre("save",async function(next){
    const user=this
    if(user.isModified('password')){
        user.password=await bcrypt.hash(user.password, 8)
    }
    next()
})
userSchema.pre('remove',async function(next){
    const user=this
    await Project.deleteMany({owner:user._id})
    next()
})
const User=mongoose.model("User",userSchema)
module.exports=User