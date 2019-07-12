require('dotenv').config()
const express = require('express')
const massive = require('massive')
const controller = require('./controller')
const {SERVER_PORT, CONNECTION_STRING} = process.env

const app = express()

app.use(express.json())

app.get('/api/houses', controller.getAll)

app.post('/api/houses', controller.createHouse)

app.delete('/api/houses/:id', controller.delete)

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)

    app.listen(SERVER_PORT, () => {
        console.log(`listening on port ${SERVER_PORT}`)
    })
})
