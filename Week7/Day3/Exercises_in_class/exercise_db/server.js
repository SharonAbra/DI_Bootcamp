const exp = require('express');
const cors = require('cors');
const DB = require('./modules/dbmodule.js');
const app = exp();
app.use(cors());

// DB.countries();
// .then(data => {
//     console.log(data);
// })
// .catch(e => {
//     console.log(e);
// })

app.use('/',exp.static(__dirname+'/public'))
app.route('/getCountries')
.get((req, res) => {
    DB.countries()
    .then(data => {
        res.send(data)
    })
.catch(e => {
    res.send({message:e.message})
    })
})
app.listen(3000);