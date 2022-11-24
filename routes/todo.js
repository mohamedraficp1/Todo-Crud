const express = require('express');
const router = express.Router()
const todos= require('../controller/todos')

router.post ('/newItem', todos.newItem )
router.get ('/items', todos.getAllItems )
router.delete ('/item/:id', todos.deleteItem )
router.put ('/item/:id', todos.editItem )

module.exports= router