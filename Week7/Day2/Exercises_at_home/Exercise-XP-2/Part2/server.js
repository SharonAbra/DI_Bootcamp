const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/:id', (req, res) => {
    res.send(req.params)
});

app.listen(4000);