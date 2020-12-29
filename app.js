const { text } = require('express')
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

//Checkpoint 3, Assignment #1:
app.get('/sum', (req, res) => {
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    if(!b) {
        return res.status(400).send('b is required and must be a number')
    }
    if(!a) {
        return res.status(400).send('a is required and must be a number')
    }
    const sum = a + b
    res.status(200).send(`The sum of ${a} and ${b} is ${sum}`)
})

//Checkpoint 3, Assignment #2:
app.get('/cipher', (req, res) => {
    const text = req.query.text
    const shift = parseInt(req.query.shift)
    if(!text) {
        return res.status(400).send('text is required')
    }
    if(!shift) {
        return res.status(400).send('shift is required and must be a number')
    }
    const base = 'A'.charCodeAt(0)
    const cipher = text.toUpperCase().split('').map(char => {
        const code = char.charCodeAt(0)
        if(code < base || code > (base + 26)) {
            return char
        }
        let difference = code - base
        difference = difference + shift
        diffierence = difference % 26
        const shiftedCharacter = String.fromCharCode(base + difference)
        return shiftedCharacter
    }).join('')
    res.status(200).send(cipher)
})

//listening on local host 8000
app.listen(8000, () => {
    console.log('Express server is listening on port 8000!')
})

