const axios = require('axios');

const getGif = async () => {
  try{
    const res = await axios.get('https://api.giphy.com/v1/gifs/random?api_key=aG2WocWud5kMNyjenOoSBNwDfacNfUJK&tag=happy&rating=g');
    const gif = await res.data;
    return gif
  }
  catch(e){
    console.log(e);
  }
}

module.exports = {
  getGif: getGif
}