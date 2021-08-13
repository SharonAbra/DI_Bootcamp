// retrieve database module
const DB = require('./dbmodule.js');

// module function with user input as parameter
const chooseResponse = (userInput) => {
    return new Promise((resolve, reject) => {
        // retrieve triggers data
        DB.triggers()
        // loop through the data to see if user's input in it, and retrieve group classification
        .then(data => {
            let group = 'ALT';
            const responsesArray = [];
            for (let i = 0; i < data.length; i++) {
                if(data[i]["trigger_body"]==userInput){
                    // console.log(data[i]["trigger_body"]==userInput);
                    group = data[i]["trigger_group"];
            }
        }
            // retrieve responses data
            DB.responses()
            .then(data => {
                // loop through the data to make an array of responses from same group classification
                for (let j = 0; j < data.length; j++) {
                    if (data[j]["response_group"] === group) {
                        responsesArray.push(data[j]["response_body"])
                    }
                }
                // return a random response from the array of responses
                const position = Math.floor(Math.random() * responsesArray.length)
                const responseItem = responsesArray[position];
                //console.warn(responseItem);
                resolve(responseItem);
            }).catch((err) => reject(err));
        }).catch((err) => reject(err));
    });
};

// prepare function for export
module.exports = {
    responseFunc: chooseResponse
  }
