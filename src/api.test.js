var api = require("./api.js");

var fetch = api.fetch("http://checkoutafrica.com/wp-json/wp/v2");

test("getPosts() returns all posts", async () => {
  var data = await fetch.getPosts();
  expect(data).toBe(1);
});
