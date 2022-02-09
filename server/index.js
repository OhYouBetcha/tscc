const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({hi: 'there'});
});

app.get('/test5', (req, res) => {
    res.send({hi: 'test5'});
});

app.listen(5000);