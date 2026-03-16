const express=require('express')
const app=express()
const db=require('./db');

const Person=require('./models/person');
const bodyParser=require('body-parser')
app.use(bodyParser.json());


const MenuItem=require('./models/MenuItem')

app.get('/',function(req,res){
  res.send("welcome to our hotel")
})



//import the router files
const personRoutes=require('./routes/personRoutes');
const menuitemRoutes=require('./routes/menuitemRoutes');

//use the routers
app.use('/person',personRoutes);
app.use('/menu',menuitemRoutes);

app.listen(3000,()=>{
  console.log("listening on port 3000");
}); 