const express = require('express')
const { Sequelize, DataTypes } = require('sequelize')
const Task = require('./models/task')

const app = express()
const sequelize = new Sequelize('postgres://postgres:example@db:5432/toti')
const tasks = Task(sequelize, DataTypes)

// List tasks
app.get('/tasks', (req, res) => {
  res.send('TODO')
})

// Create task
app.post('/tasks', (req, res) => {
  res.send('TODO')
})

// Show task
app.get('/tasks/:id', (req, res) => {
  res.send('TODO')
})

// Update task
app.put('/tasks/:id', (req, res) => {
  res.send('TODO')
})

// Delete task
app.delete('/tasks/:id', (req, res) => {
  res.send('TODO')
})

app.listen(3000, () => {
  console.log('Iniciando o ExpressJS na porta 3000')
})
