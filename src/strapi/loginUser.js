import axios from "axios";
import url from "./URL";

async function loginUser({ email, password }) {
  const response = await axios
    .post(`${url}/auth/local`, {
      identifier: email,
      password
    })
    .catch(error => console.log(error));

  if (response) {
    //set up user
  }

  return response;
}

export default loginUser;
