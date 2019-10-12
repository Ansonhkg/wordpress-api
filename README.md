# What is this?

A utility library to fetch wordpress content through REST API.

# Installation

## npm

## yarn

# Usage

```js
const api = require('./api')
const baseUrl = 'http://your-wordpress-api.com/wp-json/wp/v2';
const wp = api.fetch(baseUrl);

async function run () {
    // return top (default) 10 posts
    var posts = await wp.getPosts("&slug=your-post-title-most-likely");
    
    // return categories by slug
    var categories = await wp.getCategories("&slug=news");

    // return posts by category slug
    var posts = await wp.getPostsByCategorySlug({
        slug: "news",
        page: 1,
        per_page: 5
    });
}

run();

```