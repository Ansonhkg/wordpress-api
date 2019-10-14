const axios = require("axios");

/**
 * Return posts
 * @param { String } params
 * @return { Array }
 */
const getPosts = async (URL, params) => {
  var api = URL + "/posts?_embed" + params;
  return await axios.get(api);
};

/**
 * Return categories
 * @param { String } params
 */
const getCategories = async (URL, params) => {
  var api = URL + "/categories?_embed" + params;
  return await axios.get(api);
};

/**
 * return posts by category slug
 * @param { String } URL
 * @param { Object } params
 */
const getPostsByCategorySlug = async (URL, params) => {
  // get categories by slug name
  var categories = await getCategories(URL, "&slug=" + params.slug);
  // get category id
  var category_id = categories.data[0].id;

  // get posts by category id
  var result = await getPosts(
    URL,
    "&categories=" +
      category_id +
      "&per_page=" +
      params.per_page +
      "&page=" +
      params.page
  );
  return result;
};

/**
 * Extract categories from post object
 * @param { Object } post
 */
const extractCategories = post => {
  return post._embedded["wp:term"][0];
};

/**
 * Extract tags from post object
 * @param { Object } post
 */
const extractTags = post => {
  return post._embedded["wp:term"][1];
};

/**
 * Extract author from post object
 * @param { Object } post
 */
const extractAuthor = post => {
  return post._embedded.author[0];
};

module.exports = {
  fetch: URL => {
    return {
      getPosts: params => getPosts(URL, params),
      getCategories: params => getCategories(URL, params),
      getPostsByCategorySlug: params => getPostsByCategorySlug(URL, params),
      extractCategories: post => extractCategories(post),
      extractTags: post => extractTags(post),
      extractAuthor: post => extractAuthor(post)
    };
  }
};
