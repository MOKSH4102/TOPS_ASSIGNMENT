const express = require('express')
const app = express()
require("dotenv").config()
const PORT = process.env.PORT 

const mongoose = require('mongoose');

app.use(express.json());

const url = process.env.DBURL

mongoose.connect(url).then(()=>{
    console.log("db connected...");
}).catch(err =>{
    console.log(err);
})

const taskSchema = new mongoose.Schema({

    title : { 
        type : String,
        // unique : true,
        // trim:true
    },
    description : {
        type : String
    },
    completed : {
        type : Boolean,
        required : true
    }

})

const Task = new mongoose.model("task",taskSchema);


app.get('/tasks',async (req, res) =>{
    try {
        const employee = await Task.find()
        res.send(employee)
    } catch (error) {
        res.send(error)
    }
})

app.post('/tasks',async (req, res) =>{

    console.log(req.body);
    
    try {
        const p1 = new Task(req.body)
        const data = await p1.save()
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})
app.put('/tasks',async (req, res) =>{

    
    
    try {
        const data = await Task.findByIdAndUpdate(req.query.id,req.body)
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})
app.delete('/tasks',async (req, res) =>{
    try {
        const data  = await Task.findByIdAndDelete(req.query.id)
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})