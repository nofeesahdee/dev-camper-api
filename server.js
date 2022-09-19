const express = require('express');
const dotenv = require('dotenv');

// dotenv.config({ path: './config/config.env '})
const app = express();

const PORT = 3000

app.get('/', (req,res) =>{
    res.send('Hello from express')
})

app.listen(
    PORT, 
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);