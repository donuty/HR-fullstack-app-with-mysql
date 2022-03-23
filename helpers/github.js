const axios = require('axios');
const config = require('../config.js');
require('dotenv').config()

let getReposByUsername = (username, callback) => {

  let options = {
    method: 'GET',
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  return axios.get(options.url, options.headers)


  // error handling?

}


module.exports.getReposByUsername = getReposByUsername;