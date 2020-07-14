const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const CovidData = require('../../models/Coviddata');




router.get('/test',(req,res)=>{
    res.json({msg:'success'})
})

router.get('/getall',async(req,res)=>{
    let alldata = await CovidData.find();
    res.json({
        alldata
    })
})

router.get('/getone',async(req,res)=>{
    let county = await CovidData.findOne({county:req.query.county});
    res.json({
        county
    })

})
module.exports = router;