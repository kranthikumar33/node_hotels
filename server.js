const express=require('express')
const app=express()
const db=require('./db');
require('dotenv').config();

const Person=require('./models/person');
const bodyParser=require('body-parser')
app.use(bodyParser.json());
const PORT=process.env.PORT||3000;

//Middleware functions
const logRequest = (req,res,next)=>{
  console.log(`[${new Date().toLocaleString()}] Request Made to : ${req.originalUrl}`);
  next();//Move on to the next phase
}

const MenuItem=require('./models/MenuItem')
app.use(logRequest);

app.get('/',function(req,res){
  res.send("welcome to our hotel")
})



//import the router files
const personRoutes=require('./routes/personRoutes');
const menuitemRoutes=require('./routes/menuitemRoutes');

//use the routers
app.use('/person',personRoutes);
app.use('/menu',menuitemRoutes);


app.listen(PORT,()=>{
  console.log("listening on port 3000");
}); 