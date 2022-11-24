const Todo = require('../models/todos')

module.exports = {

    newItem: async (req, res) => {
        try {
            const content = req.body;
            const item = await Todo.create(
                content
            )

            res.status(200).send(item);

        } catch (error) {
              console.log(error);  
        }

    },

    getAllItems : async (req, res) => {
        try {
            const items = await Todo.find()
            res.status(200).send(items)
        } catch (error) {
            console.log(error);
        }

    },
    editItem : async (req, res) => {
        try {
            const id  = req.params.id;
            const content = req.body;
            const updatedItem = await Todo.findByIdAndUpdate(id, content)
            res.status(200).send(updatedItem);

        } catch (error) {
            console.log(error);
        }
    },

    deleteItem : async (req, res) => {
        try {
            const id = req.params.id;
            const item = await Todo.findByIdAndDelete(id)
            res.status(200).send(item)
        } catch (error) {
            console.log(error)
        }
    }


}