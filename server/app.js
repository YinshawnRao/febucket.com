const express = require('express')
const articleRouter = require('./routes/article')

const { PORT } = require('./common/config')

const app = express()

app.use(express.static('dist'))

app.get('/article/:title', articleRouter)

app.listen(PORT, () => {
    console.log(`> Server is Running at http://localhost:${PORT}`)
})