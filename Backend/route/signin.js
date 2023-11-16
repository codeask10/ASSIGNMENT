const express = require('express')
const router = express.Router();
const User = require("../Models/Signin")
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
dotenv.config();


router.post('/Signin', [
    body('firstName', 'Enter a valid first name').isLength({ min: 3 }),
    body('lastName', 'Enter a valid last name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    let success = false;
    const err = validationResult(req)
    if (!err.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }
    try {
        //check weather email is present in the database or not
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ success, error: "Sorry a user with this email already exists" })
        }
        const salt = await bcrypt.genSalt(parseInt(process.env.REACT_APP_SALT));
        const secPass = await bcrypt.hash(req.body.password, salt);
        // Create a new user
        user = await User.create({
            firstName: req.body.firstName,
            lastName:req.body.lastName,
            password: secPass,
            email: req.body.email,
        });
        const data = {
            user: {
              id: user.id
            }
          }
          var authtoken = jwt.sign(data, process.env.REACT_APP_JWT_SECRET);
      
          // res.json(user)
          success=true
          res.json({ success,authtoken })

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});
module.exports = router;