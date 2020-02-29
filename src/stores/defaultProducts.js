import { writable } from "svelte/store";
import localProducts from "../routes/products/_products.js";

const store = writable(flattenProducts([...localProducts]));

// subscribe
// set
// update

function flattenProducts(data) {
  return data.map(item => {
    let image = item.image.url;
    return { ...item, image };
  });
}

export const getProducts = () => {
  return flattenProducts([...localProducts]);
};

export default store;
