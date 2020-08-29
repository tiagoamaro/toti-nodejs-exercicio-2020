const express = require('express')
const { Sequelize, DataTypes } = require('sequelize')
const Task = require('./models/task')

const app = express()
const sequelize = new Sequelize({ dialect: 'sqlite', storage: './task-list.db' })
const tasks = Task(sequelize, DataTypes)

// We need to parse JSON coming from requests
app.use(express.json())

// List tasks
app.get('/tasks', (req, res) => {
  res.json({ action: 'Listing tasks' })
})

// Create task
app.post('/tasks', (req, res) => {
  const body = req.body

  res.json(body)
})

// Show task
app.get('/tasks/:id', (req, res) => {
  const taskId = req.params.id

  res.send({ action: 'Showing task', taskId: taskId })
})

// Update task
app.put('/tasks/:id', (req, res) => {
  const taskId = req.params.id

  res.send({ action: 'Updating task', taskId: taskId })
})

// Delete task
app.delete('/tasks/:id', (req, res) => {
  const taskId = req.params.id

  res.send({ action: 'Deleting task', taskId: taskId })
})

app.listen(3000, () => {
  console.log('Iniciando o ExpressJS na porta 3000')
})
