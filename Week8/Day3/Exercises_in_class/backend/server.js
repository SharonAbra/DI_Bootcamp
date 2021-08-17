const exp = require('express');
const cors = require('cors');
// const bp = require('body-parser');
const DB = require('./modules/db.js');
const CITY = require('./modules/cityModule.js');

const app = exp();
app.use(cors());

// app.use(bp.urlencoded({extended:false}))
// app.use(bp.json());

// app.use('/', exp.static(__dirname+'/public'));

app.route('/')
  .get((req,res)=>{
     DB.getAllCountries()
     .then(data=>{
       res.send(data)
     })
     .catch(e => {
       res.send({message:e.message})
     })
  })

  app.route('/cities/:id')
  .get((req,res)=>{
     CITY.getCities(req.params.id)
     .then(cities=>{
       res.send(cities)
     })
     .catch(e => {
       res.send({message:e.message})
     })
  })

app.listen(4000);

