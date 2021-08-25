import axios from 'axios';

export const handleFname = val => {
    return {
        type: 'FNAME',
        payload: val
    }
}

export const handleSname = val => {
    return {
        type: 'SNAME',
        payload: val
    }
}

export const handleClick = (fname, sname) => (dispatch) => {
    let options = {
        method: 'GET',
        url: 'https://love-calculator.p.rapidapi.com/getPercentage',
        params: {fname: fname, sname: sname},
        headers: {
          'x-rapidapi-host': 'love-calculator.p.rapidapi.com',
          'x-rapidapi-key': '500e8a1bbbmsh593e8d8ee4bb840p1cdf1ejsna599ce65c8f6'
        }
      };
      axios.request(options).then(function (response) {
          dispatch({
              type: 'RESULT', 
              payload: response.data
            })
      }).catch(function (error) {
          console.error(error);
      });
}
