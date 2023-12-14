const express = require('express')
const app=express()
const cors=require('cors')
const Router = require("../router/router")

app.use(express.json())
app.use(cors())
app.use("/", Router)

module.exports=app