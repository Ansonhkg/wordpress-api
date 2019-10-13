const api = require("./api.js");
const wp = api.fetch("http://checkoutafrica.com/wp-json/wp/v2");

test("getPosts() returns default 10 posts", async () => {
  var data = await wp.getPosts();
  expect(data.data.length).toBe(10);
});

test("getPosts() returns 20 posts", async () => {
  var data = await wp.getPosts("&per_page=20");
  expect(data.data.length).toBe(20);
});

test("getPosts() returns 30 posts", async () => {
  var data = await wp.getPosts("&per_page=30");
  expect(data.data.length).toBe(30);
});

test("extractCategories() from post", async () => {
  var post = await wp.getPosts("&per_page=1");

  var categories = wp.extractCategories(post.data[0]);
  expect(Array.isArray(categories)).toBe(true);

  var category = categories[0];
  expect(category.hasOwnProperty("id")).toBe(true);
  expect(category.hasOwnProperty("name")).toBe(true);
  expect(category.hasOwnProperty("slug")).toBe(true);
  expect(category.hasOwnProperty("taxonomy")).toBe(true);
});

// test("extractTags() from post", async () => {
//   var post = await wp.getPosts("&per_page=1");

//   var tags = wp.extractTags(post.data[0]);
//   expect(Array.isArray(tags)).toBe(true);

//   var tag = tags[0];
//   expect(tag.hasOwnProperty("id")).toBe(true);
//   expect(tag.hasOwnProperty("name")).toBe(true);
//   expect(tag.hasOwnProperty("slug")).toBe(true);
//   expect(tag.hasOwnProperty("taxonomy")).toBe(true);
// });
