const express=require("express");
const router=express.Router();
const MenuItem=require('../models/MenuItem')

//POST method to add a menu item
router.post('/',async(req,res)=>{
  try{
    const data=req.body;
    const newItem=new MenuItem(data);

    const response=await newItem.save();
    console.log("data saved");
    res.status(200).json(response);
  }
  catch(error){
    console.log(error);
    res.status(500).json({error:"Internal server error"});
  }

})

router.get('/',async(req,res)=>{
  try{
    const data=await MenuItem.find();
    console.log('data fetched');
    res.status(200).json(data);
  }
  catch(error){
    console.log(error);
    res.status(500).json({error:"Internal server error"})
  }
})

router.get('/:taste',async(req,res)=>{
  try{
      const tasteType=req.params.taste; //extract the taste type from the url parameter//
      if(tasteType=='sweet'|| tasteType=='sour'|| tasteType=='spicy'){
        const response=await MenuItem.find({taste:tasteType});
        console.log('response fetched');
        res.status(200).json(response);
      }
      else{
        res.status(404).json({error:"Inavlid work type"});
      }
  }
  catch(error){
    console.log(error);
    res.status(500).json({error:"Internal server error"});
  }

})
//comment added for testing purposes
module.exports=router;