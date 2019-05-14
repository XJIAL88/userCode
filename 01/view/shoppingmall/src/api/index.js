import axios from "axios";

axios.defaults.baseURL = "https://www.easy-mock.com/mock/5ccd8d63c4baf86c3dcadf30/shoppingmall";
axios.interceptors.response.use(result=>result.data.data);
export let getSlidesData =()=>{
  return axios.get("/index");
}
// https://www.easy-mock.com/mock/5ccd8d63c4baf86c3dcadf30/shoppingmall/index
