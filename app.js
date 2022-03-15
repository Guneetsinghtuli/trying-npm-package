const axios = require('axios')

class API {
  constructor(baseURL, headers, body) {
    this.baseURL = baseURL;
    this.headers = headers;
    this.body = body;
  }

  get(endpoint,headers,body) {
    let url = this.baseURL + endpoint;
    let getBody = {...this.body , ...body}
    axios.get(url, {
      method: "GET",
      headers: {
       ...this.headers ,
       ...headers
      },
      body: JSON.stringify(getBody),
    })
      .then((data) => {
        console.log("Success:", data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}

module.exports = API;
