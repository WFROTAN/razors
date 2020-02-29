import { writable, derived } from "svelte/store";
import localCart from "../localCart.js";
import { onMount } from "svelte";

const cart = writable(getStorageCart());

// cart total
export const cartTotal = derived(cart, $cart => {
  let total = $cart.reduce((acc, curr) => {
    return (acc += curr.amount * curr.price);
  }, 0);
  return total.toFixed(2);
});

// local functions
const toggleAmount = (id, items, action) => {
  return items.map(item => {
    let newAmount;
    if (action === "inc") {
      newAmount = item.amount + 1;
    } else if (action === "dec") {
      newAmount = item.amount - 1;
    } else {
      newAmount = item.amount;
    }
    return item.id === id ? { ...item, amount: newAmount } : { ...item };
  });
};

// global functions
export const removeItem = id => {
  cart.update(storeValue => {
    return storeValue.filter(item => item.id !== id);
  });
};

export const increaseAmount = id => {
  cart.update(storeValue => {
    return toggleAmount(id, storeValue, "inc");
  });
};

export const decreaseAmount = id => {
  cart.update(storeValue => {
    let item = storeValue.find(item => item.id === id);
    let cart;
    if (item.amount === 1) {
      cart = removeItem(id);
    } else {
      cart = toggleAmount(id, storeValue, "dec");
    }
    return [...cart];
  });
};

export const addToCart = (id, product) => {
  cart.update(storeValue => {
    let item = storeValue.find(item => item.id === id);

    let cart;
    if (item) {
      cart = toggleAmount(id, storeValue, "inc");
    } else {
      const { id, image, title, price } = product;
      let newItem = { id, image, title, price, amount: 1 };
      cart = [...storeValue, newItem];
    }
    return [...cart];
  });
};

// localStorage

export function getStorageCart() {
  if (process.browser) {
    //console.log("inside!!");
    const res = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    //console.log(res);
    return res;
  }
}

export function setStorageCart(cartValues) {
  localStorage.setItem("cart", JSON.stringify(cartValues));
}

export default cart;
