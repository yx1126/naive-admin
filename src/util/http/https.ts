import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosRequestHeaders } from "axios";

class Https {
    private service: AxiosInstance;

    constructor(config?: AxiosRequestConfig) {
        this.service = axios.create(config);
    }

    request<T extends AxiosRequestConfig>(onFulfilled?: (value: AxiosRequestConfig) => T | Promise<T>, onRejected?: (error: any) => any) {
        this.service.interceptors.request.use(onFulfilled, onRejected);
    }

    response<T extends AxiosResponse>(onFulfilled?: (value: AxiosResponse) => T | Promise<T>, onRejected?: (error: any) => any) {
        this.service.interceptors.response.use(onFulfilled, onRejected);
    }

    requset<T = any>(params: AxiosRequestConfig) {
        return this.service.request<T>(params);
    }

    getUri(config?: AxiosRequestConfig) {
        return this.service.getUri(config);
    }

    get<T>(url: string, params?: any, headers?: AxiosRequestHeaders) {
        return this.service.get<T>(url, { params, headers });
    }

    delete<T>(url: string, params?: any, headers?: AxiosRequestHeaders) {
        return this.service.delete<T>(url, { params, headers });
    }

    head<T>(url: string, params?: any, headers?: AxiosRequestHeaders) {
        return this.service.head<T>(url, { params, headers });
    }

    options<T>(url: string, params?: any, headers?: AxiosRequestHeaders) {
        return this.service.options<T>(url, { params, headers });
    }

    post<T>(url: string, data?: any, headers?: AxiosRequestHeaders) {
        return this.service.post<T>(url, data, { headers });
    }

    postForm<T>(url: string, data?: Record<string, any>, headers?: AxiosRequestHeaders) {
        const form = new FormData();
        Object.keys(data || {}).forEach(key => {
            form.append(key, data![key]);
        });
        return this.service.post<T>(url, form, {
            headers: {
                "content-type": "multipart/form-data",
                ...headers,
            },
        });
    }

    download<T = Blob>(url: string, data?: Record<string, any>, headers?: AxiosRequestHeaders) {
        return this.service.post<T, AxiosResponse<T>>(url, data, {
            responseType: "blob",
            ...headers,
        });
    }

    put<T>(url: string, data?: any, headers?: AxiosRequestHeaders) {
        return this.service.put<T>(url, data, { headers });
    }

    patch<T>(url: string, data?: any, headers?: AxiosRequestHeaders) {
        return this.service.patch<T>(url, data, { headers });
    }
}

export default Https;
