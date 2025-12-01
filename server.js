import express from "express";
import axios from "axios";

const app = express()

app.get('/', async(req, res) => { 
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
    console.log('response->', response.data)
    res.json(response.data)
})

app.listen(9000)