const fs = require('fs');
fs.readFile('./text.txt', function (err, data) {
    if (err) {
        console.error(err)
        return
    }
    console.log(data.toString());
});

fs.writeFile('./file.txt', 'This is the file I created', function (err) {
    if (err) {
        console.error(err)
    }
    console.log('Write operation complete');
});

fs.appendFile('./file.txt', '\n' + 'Here is some more content I appended', function (err) {
    if (err) {
        console.error(err)
        return
    }
    console.log('append operation complete');
});

fs.unlink('file.txt', function (err) {
    console.log('write operation complete.');
});