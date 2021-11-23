const express = require('express')
const service = require('../services')

const app = express()
const port = 8000

app.use(express.json())
app.post("/api/todos", service.new)
app.get("/api/todos", service.get)
app.delete("/api/todos/:id", service.delete)
app.post("/api/todos/:id", service.update)
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})

// handler by zikri