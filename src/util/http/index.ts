import Https from "./https";

Https.request(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    },
);
Https.response(
    response => {
        const { data } = response;
        if(["arraybuffer", "blob"].includes(response.config.responseType!)) {
            return response;
        } else if(data.code !== 200) {
            return Promise.reject(data.message);
        } else {
            return data;
        }
    },
    error => {
        return Promise.reject(error);
    },
);

const http = new Https({
    baseURL: "",
});

export default http;
