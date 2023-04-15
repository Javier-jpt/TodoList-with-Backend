const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const app = express();
// use express.jason() to get data into json format.
app.use(express.json());

// Port 
const PORT = process.env.PORT || 5500;

// Here we import Routes

const todoItemRoute = require('./routes/todoItems');

// Connect to mongoDB
mongoose.connect(process.env.DB_CONNECT)
.then(()=> console.log("Database Connected"))
.catch(err => console.log(err))

app.use('/', todoItemRoute);



//Add Port and connect to server
app.listen(PORT, ()=> console.log("Server connected"))