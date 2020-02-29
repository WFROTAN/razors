import products from "../../stores/products.js";

const contents = JSON.stringify(
  products.subscribe(products => {
    products.map(product => {
      return {
        title: product.title,
        slug: product.slug
      };
    });
  })
);

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(contents);
}
