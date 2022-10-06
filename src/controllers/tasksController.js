const tasksModel = require('../models/tasksModel')

const getAll = async (req, res) => {
    const tasks = await tasksModel.getAll()
         return res.status(200).json({tasks})
    };

const createTask = async (req, res) => {

    const createdTask = await tasksModel.createTask(req.body);

    return res.status(201).json(createdTask)
}

const deleteTask = async (req, res) => {
    const deletedTask = await tasksModel.deleteTask(req.params.id)

    return res.status(202).json(deletedTask)
}

const updateTask = async (req, res) => {

    const {id} = req.params.id

    
    await tasksModel.updateTask(id, req.body);
    return res.status(203).json()
}

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask
};