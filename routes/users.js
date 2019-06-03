const express = require('express');

const router = express.Router();


// Login Route
router.get('/login', (req, res) => res.render('login'));

// Register Route
router.get('/register', (req, res) => res.render('register'));

module.exports = router;
