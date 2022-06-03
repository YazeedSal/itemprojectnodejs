const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const path = require('path')

mongoose
.connect(process.env.MONGODB_URL)
.then(()=>console.log("connected to database"))


const app = express()
const itemRouter = require("./server/routes/items.api") 

app.use(express.static(path.join(__dirname, "dist")))

app.use(express.json())

app.use("/item", itemRouter)

const PORT = process.env.PORT 

app.listen(PORT, function(){
    console.log("up and running on port " +PORT);
})