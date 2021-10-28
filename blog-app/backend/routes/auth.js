const router = require('express').Router();
const User = require('../models/User');
const config = require('config');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// LOGIN
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    } 

    try {
        User.findOne({ email })
            .then(user => {
                if (!user) return res.status(400).json({ msg: 'User does not exist' });

                // Validate password
                bcrypt.compare(password, user.password)
                    .then(isMatch => {
                        if (!isMatch) return res.status(400).json({ msg: 'Invalid Credentials'});
                        
                        jwt.sign(
                            { id: user.id },
                            config.get('jwtSecret'),
                            { expiresIn: 3600 },
                            (err, token) => {
                                if(err) throw err;
                                res.json({
                                    token,
                                    user: {
                                        id: user.id,
                                        username: user.username,
                                        email: user.email,
                                    }
                                })
                            }
                        )
                    })
            })
    } catch(e) {
        res.status(400).json({ msg: e.message})
    }
})

// REGISTER
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    } 

    // Check user isn't registered already
    try { 
        User.findOne({ email })
        .then(user => {
            if (user) return res.status(400).json({msg:"User already exists"});

            const newUser = new User({
                username,
                email,
                password
            });

            // Create salt and hash
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => {

                            jwt.sign(
                                { id: user.id },
                                config.get('jwtSecret'),
                                { expiresIn: 3600 },
                                (err, token) => {
                                    if(err) throw err;
                                    res.json({
                                        token,
                                        user: {
                                            id: user.id,
                                            username: user.username,
                                            email: user.email,
                                        }
                                    })
                                }
                            )
                        })
                })
            })
        })
    } catch (err) {
        res.status(400).json({msg: err.message})
    }
});

module.exports = router;