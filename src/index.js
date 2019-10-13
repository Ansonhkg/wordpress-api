const api = require("./api");
// const wp = api.fetch("http://checkoutafrica.com/wp-json/wp/v2");

const _console = {
  log: data => console.log(JSON.stringify(data, null, 4))
};

const run = async () => {
  var posts = await wp.getPostsByCategorySlug({
    slug: "news",
    page: 1,
    per_page: 5
  });
  console.log(posts);
};

// run();

module.exports = api;
