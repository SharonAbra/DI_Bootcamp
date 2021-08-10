const fs = require('fs');
fs.readFile('./text.txt', function (err, data) {
    if (err) {
        console.error(err)
        return
    }
    console.log(data.toString());
});