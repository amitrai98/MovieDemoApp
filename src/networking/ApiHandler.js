import AppConstants from "../utility/AppConstants";

var axios = require("axios");
var authToken = null;

export default class ApiHandler {
  instance = null;

  /**
   * provides token for api calls
   * @param {token for api call} authToken
   */
  static getInstance(token) {
    if (this.instance == null) {
      this.instance = new ApiHandler();
    }
    authToken = token;
    return this.instance;
  }

  /**
   * returns header
   */
  getHeader() {
    return {
      headers:
        authToken != null && authToken != undefined
          ? this.getHeaderWithToken()
          : this.getHeaderWithoutToken()
    };
  }

  /**
   * returns header with authtoken
   */
  getHeaderWithToken() {
    return {
      Authorization: "Bearer " + authToken
    };
  }

  /**
   * get list of movies.
   */
  getMovies() {
    return new Promise((resolve, reject) => {
      axios
        .get(AppConstants.BASE_URL)
        .then(function(response) {
          return resolve({ response });
        })
        .catch(function(error) {
          return reject({ error });
        });
    });
  }
}
