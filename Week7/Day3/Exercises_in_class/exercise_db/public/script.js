const dbmodule = require("../modules/dbmodule");

const createSelectBox = (countries) => {
    const root = document.getElementById("root");
    let select = document.createElement("select");
    root.appendChild(select);
    countries.forEach((item, i) => {
    let option = new Option(item.country, item.country_id);
    select.appendChild(option);
  })
}

const country = () => {
  fetch('http://localhost:3000/getCountries')
  .then(res => res.json())
  .then(data => {
    createSelectBox(data);
  })
  .catch(e => {
    console.log(e);
  })
}

country();

applicationCache.post('/login', (req, res) => {
  DB.createUser(req.body.username, )
})