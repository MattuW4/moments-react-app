import axios from "axios";

axios.defaults.baseURL = "https://drf-api-mw-9efbc86656ab.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axioscreate();