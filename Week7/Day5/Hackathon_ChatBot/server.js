// get external modules
const exp = require('express');
const cors = require('cors');
const response = require('./modules/compareModule.js');
const app = exp();

// middleware
app.use(cors());
app.use('/',exp.static(__dirname+'/public'))

// use module to send data to front
app.get('/input', async(req,res) => {
  try {
    let input = req.query.input
    // call the module function with user input as argument
    let item = await response.responseFunc(input)
    console.log(item)
    res.send(item)
    }
  catch {
    console.log('error')
  }
})

app.listen(3000);
