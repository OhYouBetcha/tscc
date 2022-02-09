const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({hi: 'there'});
});

app.get('/test7', (req, res) => {
    res.send({hi: 'test7'});
});

app.listen(5000);