import axios from "axios";
import { baseURL } from "../endpoints/endpoints";
import { parseCookies } from "nookies";

const AxiosInstance = axios.create({
  baseURL: baseURL,
  // timeout:10
});

// request
// Private api -> send token to server
// public api
//
AxiosInstance.interceptors.request.use(
  (config) => {
    const cookies = parseCookies();
    const token = cookies["token"];

    if (token) {
      config.headers["Authorization"] = token;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// reponse
AxiosInstance.interceptors.response.use(
  (response) => {
    return {
      ...response,
      test: "Nabin",
    };
  },
  (error) => {
    console.log(error);
    // alert(error.message)
    return Promise.reject(error);
  }
);

//
// axios.get('www.something.com/routes')
// axiosInstance.get('/routes')

export default AxiosInstance;
