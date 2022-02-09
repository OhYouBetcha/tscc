const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({hi: 'there'});
});

app.get('/test', (req, res) => {
    res.send({hi: 'test2'});
});

app.listen(5000);