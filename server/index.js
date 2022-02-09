const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({hi: 'there'});
});

app.get('/test8', (req, res) => {
    res.send({hi: 'test8'});
});

app.listen(5000);