const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todo')

const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()

app.use('/', todoRoutes)
const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log('Conncted to port')
})

mongoose.connect(process.env.DATABASE_URL).then(() => {
    console.log("Database connected")
})
    .catch((err) => { console.log(err) });