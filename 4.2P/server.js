var express = require("express");
var app = express()
var port = process.env.PORT || 3000;
const mongoose = require("mongoose");

//Middleware
app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Connecting Database
mongoose.connect('mongodb://127.0.0.1:27017/myprojectDB');

mongoose.connection.on('connected', ()=>{
console.log('Connected to MongoDB')
});

//Define Schema and Model
const DessertSchema =new mongoose.Schema({
title: String,
image: String,
link: String,
description: String, 
});

const Dessert = mongoose.model('Dessert', DessertSchema);

//REST API route
app.get('/api/desserts', async (req, res) => {
const desserts = await Dessert.find({});
    res.json({ statusCode: 200, data: desserts,message: 'Success' });
});

//POST endpoint
app.post('/api/desserts', async (req, res) => {
    const { title, image, link, description } = req.body;

    if (!title || !image) {
        return res.status(400).json({ error: "Title and image are required" });
    }

    const newDessert = new Dessert({ title, image, link, description });
    await newDessert.save();

    res.json({ message: "Dessert added successfully", data: newDessert });
});

//Start server
app.listen(port,()=>{
console.log(`Server running at http://localhost:${port}`)
})
