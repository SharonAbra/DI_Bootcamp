// get external modules
const exp = require('express');
const cors = require('cors');
const response = require('./modules/compareModule.js');
const app = exp();

// middleware
app.use(cors());
app.use('/',exp.static(__dirname+'/public'))

// use module to send data to front
app.get('/input', (req,res) => {
  try {
    let input = req.query.input
    // call the module function with user input as argument
    response.responseFunc(input)
    .then((data) => {
      res.send({data: data});
    }).catch((err)=>{
      // something went wrong.
      console.error(err)
    });
    }
  catch {
    console.log('error')
  }
})

// app.get('/input',(req,res) => {
//   try {
//     let input = req.query.input
//     res.send(response.responseFunc(input))
//     }
//   catch {
//     console.log('error')
//   }
// })

app.listen(3000);
