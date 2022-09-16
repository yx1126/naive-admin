import Https from "./https";

const http = new Https({
    baseURL: "",
});

http.request(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    },
);

http.response(
    response => {
        const { data } = response;
        if(["arraybuffer", "blob"].includes(response.config.responseType!)) {
            return response;
        }
        return data;
    },
    error => {
        return Promise.reject(error);
    },
);

export default http;
