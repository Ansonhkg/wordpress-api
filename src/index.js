const api = require("./api");

// const wp = api.fetch("http://checkoutafrica.com/wp-json/wp/v2");

// const _console = {
//   log: data => console.log(JSON.stringify(data, null, 4))
// };

// const run = async () => {
//   var posts = await wp.getPostsByCategorySlug({
//     slug: "news",
//     page: 1,
//     per_page: 5
//   });

//   var post = posts.data[0];

//   console.log("Post:", post);

//   var categories = wp.extractCategories(post);

//   console.log("Categories:", categories.map(cat => cat.name));

//   var tags = wp.extractTags(post);
//   console.log("Tags:", tags.map(tag => tag.name));

//   var author = wp.extractAuthor(post);
//   console.log("Author:", author);

//   var images = wp.extractImages(post);
//   console.log("Images:", images);
// };

// run();

module.exports = api;
