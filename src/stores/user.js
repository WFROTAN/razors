import { writable } from "svelte/store";

let user;

if (process.browser) {
  user = writable(getStorageUser());

  function getStorageUser() {
    return localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : { username: null, jwt: null };
  }
}

export default user;
