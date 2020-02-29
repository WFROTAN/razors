import { writable } from "svelte/store";
//import localProducts from "../routes/products/_products.js";
import getProducts from "../strapi/getProducts.js";

const store = writable([], getProducts => {
  setProducts();
  return () => {};
});

async function setProducts() {
  let products = await getProducts();

  if (products) {
    //products = flattenProducts(products);
    store.set(products);
  }
}

// subscribe
// set
// update

/*
function flattenProducts(data) {
  return data.map(item => {
    let image = item.image.url;
    return { ...item, image };
  });
}
*/

/*
export const getProducts = () => {
  return flattenProducts([...localProducts]);
};
*/

export default store;
