const express = require('express')

const app = express()
app.use(express.json())

const port = 3000

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/v1/explorers', (req, res) => {
    const explorer1 = { name: "Jose", age: "19" }
    const explorer2 = { name: "Juan", age: "20" }
    const explorer3 = { name: "Pedro", age: "21" }
    const explorers = [explorer1, explorer2, explorer3]
    res.status(200).json(explorers)
});