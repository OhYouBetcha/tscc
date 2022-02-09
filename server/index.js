const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({hi: 'there'});
});

app.get('/test4', (req, res) => {
    res.send({hi: 'test4'});
});

app.listen(5000);