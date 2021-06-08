const express = require('express')
const path = require('path')
const routes = express.Router()

// define default router for loading index.html
routes.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '.././public/index.html'))
})

// export the routes
module.exports = routes