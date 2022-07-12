const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});

app.get('/launchx', (req, res) => {
    res.send('Woopa!')
});

app.get('/explorers', (req, res) => {
    const explorer = { name: "Jose", age: "19" }
    res.send(explorer)
});