import axios from "axios";

const axiosPrivate = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export { axiosPrivate };

// request interceptor
axiosPrivate.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    console.log("From interceptor before req is being sent");
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// response interceptor
axiosPrivate.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("From interceptor just after response is received");
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
