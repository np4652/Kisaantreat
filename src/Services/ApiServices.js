import axios from "axios";
import { getCookie } from "./Cookies";
import { DATACONSTANT } from "./DataConstant";

const baseURL = DATACONSTANT.BASE_URL;
const getStoredAuthToken = () => {
  let c = getCookie(DATACONSTANT.COOKIE_NAME);
  return c ?? "";
};

function getHeaders() {
  return {
    accept: "application/json",
    authorization: `Bearer ${getStoredAuthToken()}`,
  };
}

// function postHeaders() {
//   return {
//     "content-type": "application/json",
//     authorization: `Bearer ${getStoredAuthToken()}`,
//   };
// }

export const getRequest = (endpoint, data = null) =>
  axios
    .get(`${baseURL}${endpoint}?${new URLSearchParams(data).toString()}`, {
      headers: getHeaders(),
    })
    .then((res) => res.data)
    .catch((err) => {
      console.log(`Error in get request to endpoint ${endpoint}`, err);
      throw err;
    });

export const postRequest = async (endpoint, data = null) => {
  var config = {
    method: "post",
    url: baseURL + endpoint,
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${getStoredAuthToken()}`,
    },
    data: data,
  };
  return await axios(config)
    .then(function (response) {
      return response.data;
    })
    .catch(function (err) {
      console.error(`Error in post request to endpoint ${endpoint}`, err);
    });
};
