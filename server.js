const express = require('express');
const dotenv = require('dotenv');
const bootcamps = require('./routes/bootcamps');
const morgan = require('morgan')
const connectDB = require('./config/db')

const app = express();
dotenv.config({ path: './config/config.env'})
const PORT = process.env.PORT || 3000;

// dev logging middleware
if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

connectDB()

app.listen(
    PORT, 
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);