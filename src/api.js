import axios from "axios";

module.exports = {
  fetch: URL => {
    return {
      /**
       * Return all posts
       */
      getPosts: () => {
        return axios.get(URL);
      }
    };
  }
};
