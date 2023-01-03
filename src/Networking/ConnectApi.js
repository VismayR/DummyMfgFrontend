import axios from 'axios';

const makeRequest = (EndPoint, method, data) => {
  return new Promise((resolve, reject) => {
    axios({
      method: method,
      data: data,
      url: `https://a6a7-114-143-107-6.in.ngrok.io/${EndPoint}/1`,
    })
      .then(function (response) {
        resolve(response?.data);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};

export default makeRequest;
