const express = require("express");
const router = express.Router();
const URL = require("../models/url");  
router.get('/', async (req, res) => {
    try {
        if(!req.user) return res.redirect('/login');
        const allUrls = await URL.find({createdBy:req.user._id});
        console.log('URLs fetched:', allUrls);
        return res.render("home", { urls: allUrls }); 
    } catch (error) {
        console.error("Error fetching URLs:", error);
        return res.status(500).send("Server Error");
    }
});

router.get("/signup",(req,res)=>{
    return res.render('signup');
});
router.get("/login",(req,res)=>{
    return res.render('login');
});


module.exports = router;