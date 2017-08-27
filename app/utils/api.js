//contiains all api request

var axios = require('axios');

module.exports = {
  fetchPopularRepos: function (language) {
    var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language + '&sort=stars&order=desc&type=Repositories');

    //returs the api data using ajax axios
    return axios.get(encodedURI)
      .then(function (response) {
        return response.data.items;
      });
  }
};
