//import { getProducts } from "../../stores/defaultProducts";

import getProducts from "../../stores/products";

//import getProducts from "../../strapi/getProducts.js";

//let products = getProducts();

/*
const lookup = new Map();
products.forEach(product => {
  lookup.set(product.slug, JSON.stringify(product));
});
*/

const lookup = new Map();

getProducts.subscribe(products => {
  products.forEach(product => {
    lookup.set(product.slug, JSON.stringify(product));
  });
});

export function get(req, res, next) {
  // the `slug` parameter is available because
  // this file is called [slug].json.js
  const { slug } = req.params;

  if (lookup.has(slug)) {
    res.writeHead(200, {
      "Content-Type": "application/json"
    });

    res.end(lookup.get(slug));
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json"
    });

    res.end(
      JSON.stringify({
        message: `Not found`
      })
    );
  }
}
