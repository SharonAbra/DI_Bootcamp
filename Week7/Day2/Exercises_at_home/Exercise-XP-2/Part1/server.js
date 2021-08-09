const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send({firstname: 'John', lastname: 'Doe'});
});
app.listen(3000);