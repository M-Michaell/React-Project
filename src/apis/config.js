import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  // headers: {
  //   Accept: "application/json",
  //   Authorization:
  //     "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTcwODNlNTM0M2Y4MDQ3MzRlNTY0NTMwNGM4YzZlZiIsInN1YiI6IjY1MWYyZWY5ZjA0ZDAxMDEzOTRiMmI3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6CQ_AsUY_4kW60VLUWA3igU6wKdOfZiQsFQmzzBYPF0",
  // },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    console.log("REQUEST CONFIG", config);
    // You can modify the config here, such as adding headers
    config.headers["Accept"] = "application/json";
    config.headers["Authorization"] =
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTcwODNlNTM0M2Y4MDQ3MzRlNTY0NTMwNGM4YzZlZiIsInN1YiI6IjY1MWYyZWY5ZjA0ZDAxMDEzOTRiMmI3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6CQ_AsUY_4kW60VLUWA3igU6wKdOfZiQsFQmzzBYPF0";
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Do something with response data
    console.log("RESPONSE", response);
    return response;
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

// Now, you can use axiosInstance for making requests with the interceptors applied

// axiosInstance
//   .get("/authentication")
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
