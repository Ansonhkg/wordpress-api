# What is this?

A utility library to fetch wordpress content through REST API.

# Installation

## npm

## yarn

# Usage

```js
const api = require('@ansonhkg/wordpress-api')
const wp = api.fetch('http://your-wordpress-api.com/wp-json/wp/v2');

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

# Vue - Install it globally

```javascript
import wp from '@ansonhkg/wordpress-api'

Vue.use({
  install(Vue) {
    Vue.prototype.$wp = wp.fetch('http://your-wordpress-api.com/wp-json/wp/v2')
  },
})

```

Now, you can use 

```js
this.$wp.getPosts()

// eg. in created hook
async created(){
    const data = await this.$wp.getPosts();
}
```

in your Vue component.