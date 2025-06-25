// src/utils/request.js
import axios from "axios";

// 创建axios实例
const service = axios.create({
  baseURL: " http://localhost:3001",
  timeout: 5000, // 请求超时时间
});

// 请求拦截器
service.interceptors.request.use(
  //   (config) => {
  //     // 在发送请求前做些什么
  //     const token = localStorage.getItem("token");
  //     if (token) {
  //       config.headers["Authorization"] = "Bearer " + token;
  //     }
  //     return config;
  //   },
  (config) => {
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    console.log(error);
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    const res = response.data;
    console.log(response, "test");

    if (response.status !== 200) {
      // 处理业务错误
      alert(res.message || "Error");
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res.data;
    }
  },
  (error) => {
    // 对响应错误做点什么
    console.log("err" + error);
    // alert(error.message);
    return Promise.reject(error);
  }
);

export default service;
