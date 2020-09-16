const express = require('express')
const { Sequelize, DataTypes } = require('sequelize')
const Task = require('./models/task')

const app = express()
const sequelize = new Sequelize({ dialect: 'sqlite', storage: './task-list.db' })
const tasks = Task(sequelize, DataTypes)

// We need to parse JSON coming from requests
app.use(express.json())

// List tasks
app.get('/tasks', async (req, res) => {
  const taskList = await tasks.findAll()

  res.json({ tasks: taskList })
})

// Create task
app.post('/tasks', async (req, res) => {
  const body = req.body
  const task = await tasks.create(body)

  res.json({ task })
})

// Show task
app.get('/tasks/:id', async (req, res) => {
  const taskId = req.params.id
  const task = await tasks.findByPk(taskId)

  res.send({ task })
})

// Update task
app.put('/tasks/:id', async (req, res) => {
  const taskId = req.params.id
  const body = req.body
  const task = await tasks.findByPk(taskId)

  if (task) {
    await task.update({ ...body })
    res.send({ task })
  } else {
    res.status(404)
    res.send({ message: 'Task not found' })
  }
})

// Delete task
app.delete('/tasks/:id', async (req, res) => {
  const taskId = req.params.id
  const task = await tasks.findByPk(taskId)

  if (task) {
    await task.destroy()
    res.send({ task })
  } else {
    res.status(404)
    res.send({ message: 'Task not found' })
  }
})

app.listen(3000, () => {
  console.log('Iniciando o ExpressJS na porta 3000')
})
