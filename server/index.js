const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({hi: 'there'});
});

app.get('/test6', (req, res) => {
    res.send({hi: 'test6'});
});

app.listen(5000);