const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({hi: 'there'});
});

app.get('/test3', (req, res) => {
    res.send({hi: 'test3'});
});

app.listen(5000);