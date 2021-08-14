// get external modules
const exp = require('express');
const cors = require('cors');
const response = require('./modules/compareModule.js');
const gif = require('./modules/gif_api_module.js');
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
      if (data.split(' ').includes('pic')) {
        // call the gif module to get data from api
        gif.getGif()
        .then(gifObject => {
        // send data from both modules
        res.send({object:gifObject.data.images.original.url, data: data});
      })
      } else {
      // send data from database only
      res.send({data: data});
      }
    }).catch((err)=>{
      // something went wrong.
      console.error(err)
    });
    }
  catch {
    console.log('error')
  }
})
app.listen(3000);
