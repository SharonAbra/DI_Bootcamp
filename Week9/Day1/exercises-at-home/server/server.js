const exp = require('express');
const cors = require('cors');
const bp = require('body-parser');

const app = exp();
app.use(cors());
app.use(bp.urlencoded({extended:false}))
app.use(bp.json());

app.get('/api/hello', (req, res) => {
    res.send({message:'Hello From Express'})
})

app.post('/api/world',(req,res)=>{
    let body = req.body.input
    console.log(body);
    res.send({message:`I received your POST request. This is what you sent me: ${body}`})
    })

app.listen(4000);

