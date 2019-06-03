const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const { MongoClient, ObjectID } = require('mongodb');
const mongoose = require('mongoose');

const app = express();

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// ROUTES

app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
