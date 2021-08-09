const express = require('express');
const cors = require('cors');
const bp = require('body-parser');
const app = express();
app.use(cors());
app.use('/',express.static(__dirname+'/public/'))
app.use(bp.urlencoded({ extended: false }))
app.use(bp.json());

app.get('/aboutMe/:hobby', (req, res) => {
    if (typeof req.params.hobby === 'string') {
        res.send(req.params.hobby)
    } else {
        res.status(404).send("Not found.");
    }
});

const path = require('path');
app.get('/pic', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/pic.html'));
});

app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/form.html'));
})

app.get('/formData', (res, req) => {
    res.send(`${req.query.email} sent you a message: ${req.query.message}`)
})

app.listen(3000);