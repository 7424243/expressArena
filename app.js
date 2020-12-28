const express = require('express')

//creates the application
const app = express()

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

//listening on local host 8000
app.listen(8000, () => {
    console.log('Express server is listening on port 8000!')
})

