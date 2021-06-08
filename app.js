/***
 * 
 * Simple app that creates multi path stories, based on the current path selection
 * 
 */

// Dependencies
const express = require('express')
const path = require('path')
const routes = require(path.resolve(__dirname, './routes/routes'))

// Create the app
const app = express()

// Start listening or start the server
app.listen(5000, ()=>{
    console.log('App listening on port 5000')
})

// adding express routes to the app
app.use('/', routes)

//export the app
module.exports = app 