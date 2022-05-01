require('./db/index.js')
require('./test_scripts')
const express=require('express')
const bodyParser=require('body-parser')
const app=express()
const PORT=process.env.PORT || 3000
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/auth',require('./routes/auth/index'))
app.use('/user',require('./routes/user/index'))
app.use('/project',require('./routes/project/index'))

app.listen(PORT,()=>{
    console.log("server is up and running on port : "+PORT)
})