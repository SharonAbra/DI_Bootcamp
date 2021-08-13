const express = require('express');
let fs = require('fs');
const app = express();

app.use('/',express.static(__dirname+'/public'))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html')
  })

  app.get('/list',(req,res)=>{
    res.send(req.query);

  })

  fs.writeFile('shopping_list.txt', 'req.query.item', function (err) { 
      if (err){ 
          console.log(err);
      }
      else{
          console.log('Write operation complete.');
      }
  });

app.listen(3000);