const express = require('express');  // Import Express
const router = express.Router();  // Create a new router instance
const authController = require('../controllers/authController');  // Import the authentication controller

router.post('/signup', authController.registerUser);
router.post('/login', authController.loginUser);
router.get('/logout', authController.logoutUser);

module.exports = router;
 router.get('/signup',(req,res)=>{
    res.render('signup');
});

router.get('/login',(req,res)=>{
    res.render('login');
});

