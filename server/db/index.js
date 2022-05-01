const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/prac_nodejs_mongodb',
  {
    useNewUrlParser: true,
    // useFindAndModify: false, 
    useUnifiedTopology: true
  }
).then(()=>{
    console.log('connected to db!')
}).catch((err)=>{
    console.log("error connecting db!")
    console.log(err.message)
});