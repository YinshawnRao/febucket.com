const express = require('express')
const articleRouter = require('./routes/article')

const app = express()

app.use(express.static('dist'))

app.get('/article/:title', articleRouter)

app.listen(3030, () => {
    console.log('> Server is Running at http://localhost:3030')
})