const express = require('express')
const app = express()
const port = 3300

app.get('/', (req, res) => res.send('Express =  TypeScript Server'))

app.listen(port, () => {
    console.log(`[server]: Server is runing at http://localhost:${port}`)
})