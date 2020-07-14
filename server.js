const express = require('express');
const app = express();
const dotenv = require('dotenv');
const env = require('dotenv').config();
const connectDB = require('./config/db');



connectDB();

const PORT = process.env.PORT || 5000;

app.use(express.json());
const coviddata = require('./routes/api/coviddata');
app.use('/coviddata',coviddata)




app.listen(PORT,()=>console.log(`running on ${PORT}`))

module.exports = app;
