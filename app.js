const express = require('express')
const morgan = require('morgan')

//creates the application
const app = express()
//mount Morgan
app.use(morgan('dev'))

//sending some text to the user with a GET request to the root URL
app.get('/', (req, res) => {
    res.send('Hello Express!')
})

app.get('/burgers', (req, res) => {
    res.send('We have juicy cheese burgers!')
})

app.get('/pizza/pepperoni', (req, res) => {
    res.send('Your pizza is on the way!')
})

app.get('/pizza/pineapple', (req, res) => {
    res.send('We don\'t serve that here. Never call again!')
})

app.get('/echo', (req, res) => {
    const responseText = `Here are some details of your request:
        Base URL: ${req.baseURL}
        Host: ${req.hostname}
        Path: ${req.path}`

    res.send(responseText)
})

app.get('/queryViewer', (req, res) => {
    console.log(req.query)
    res.end();
})

app.get('/greetings', (req, res) => {
    const name = req.query.name
    const race = req.query.race
    if(!name) {
        return res.status(400).send('Please provide a name')
    }
    if(!race) {
        return res.status(404).send('Please provide a race')
    }
    const greeting = `Greetings ${name} the ${race}, welcome to our kingdom.`
    res.send(greeting)
})

//listening on local host 8000
app.listen(8000, () => {
    console.log('Express server is listening on port 8000!')
})

