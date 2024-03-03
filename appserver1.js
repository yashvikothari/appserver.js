
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://indianstockexchange.p.rapidapi.com/index.php',
  params: {id: '{scrip-id}'},
  headers: {
    'X-RapidAPI-Key': '98a630142dmsh640597897a02ab7p13c959jsnf3d2fa5230c4',
    'X-RapidAPI-Host': 'indianstockexchange.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

axios.request(options).then(function (response) { 
    var dataFromResponse = response.data; 
    console.log(dataFromResponse); 
   }).catch(function (error) { 
    console.error(error); 
   });
