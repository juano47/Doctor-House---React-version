import {BASE_URL} from "./endpoints";
import axios from "axios";

const baseApi = axios.create({
    baseURL: BASE_URL,
});

export const getData = (endPoint, params) => baseApi.get(endPoint, {params});