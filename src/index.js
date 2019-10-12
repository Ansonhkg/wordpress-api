const api = require("./api");

const fetch = api.fetch("http://checkoutafrica.com/wp-json/wp/v2");

const run = async () => {
  console.log("Data:");
};

run();

module.exports = api;
