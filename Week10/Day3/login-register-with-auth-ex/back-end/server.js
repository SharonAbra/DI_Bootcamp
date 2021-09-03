const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const env = require('dotenv');
const register = require('./controllers/register')
const signin = require('./controllers/signin')
const withAuth = require('./controllers/withAuth')
const deleteuser = require('./controllers/deleteuser')

const app = express();
env.config();

app.use(cors());
app.use(bodyParser.json());

app.post('/signin', (req,res) => {signin.handleSignIn(req,res)});
app.post('/register', (req,res)=>{register.handleRegister(req,res)});
app.post('/checkToken', withAuth.withAuth, (req,res)=> {res.sendStatus(200)})
app.post('/delete', (req,res)=> {deleteuser.handleDelete(req,res)})

app.listen(process.env.PORT, ()=>{
  console.log('listening on port '+ process.env.PORT);
})
