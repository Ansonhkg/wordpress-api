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

module.exports = {
  fetch: URL => {
    return {
      getPosts: params => getPosts(URL, params),
      getCategories: params => getCategories(URL, params),
      getPostsByCategorySlug: params => getPostsByCategorySlug(URL, params)
    };
  }
};
