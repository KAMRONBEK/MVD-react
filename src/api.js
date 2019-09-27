import axios from "axios";

export const url = "http://192.168.1.121:7070";
export default {
    menu: {
        get: () => axios.get(url + "/api/menus").then(res => res)
    },
    news: {
        get: () => axios.get(url + "/api/news").then(res => res)
    },
    regions: {
        get: () => axios.get(url + "/api/regions").then(res => res)
    }
}