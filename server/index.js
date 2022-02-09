const express = require('express');
const app = express();

app.get('/10', (req, res) => {
    res.send({hi: 'there'});
});

app.get('/test9', (req, res) => {
    res.send({hi: 'test9'});
});

app.listen(5000);