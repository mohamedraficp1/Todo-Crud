const { default: mongoose } = require('mongoose')
const monngoose= require('mongoose')

const todoSchema = mongoose.Schema({
    itemName : String,
    itemDescription : String,   
})

module.exports= mongoose.model('Todo',todoSchema )