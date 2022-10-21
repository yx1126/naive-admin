import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosRequestHeaders } from "axios";


interface OnRejected {
    (error: any): any;
}

interface Interceptors<T = AxiosRequestConfig, R = AxiosResponse> {
    request: {
        onFulfilled?: (value: AxiosRequestConfig) => T | Promise<T>;
        onRejected?: OnRejected;
    };
    response: {
        onFulfilled?: (value: AxiosResponse) => R | Promise<R>;
        onRejected?: OnRejected;
    };
}

const interceptors: Interceptors = {
    request: {
        onFulfilled: void 0,
        onRejected: void 0,
    },
    response: {
        onFulfilled: void 0,
        onRejected: void 0,
    },
};

class Https {

    private service: AxiosInstance;
    private requestBack: number | undefined;
    private responsBack: number | undefined;

    static request<T extends AxiosRequestConfig>(onFulfilled?: (value: AxiosRequestConfig) => T | Promise<T>, onRejected?: OnRejected) {
        interceptors.request.onFulfilled = onFulfilled;
        interceptors.request.onRejected = onRejected;
    }

    static response<T extends AxiosResponse>(onFulfilled?: (value: AxiosResponse) => T | Promise<T>, onRejected?: OnRejected) {
        interceptors.response.onFulfilled = onFulfilled;
        interceptors.response.onRejected = onRejected;
    }

    constructor(config?: AxiosRequestConfig) {
        this.service = axios.create(config);
        const { request, response } = interceptors;
        this.requestBack = this.service.interceptors.request.use(request.onFulfilled, request.onRejected);
        this.responsBack = this.service.interceptors.response.use(response.onFulfilled, response.onRejected);
    }

    request<T extends AxiosRequestConfig>(onFulfilled?: (value: AxiosRequestConfig) => T | Promise<T>, onRejected?: OnRejected) {
        if(this.requestBack !== void 0) {
            this.service.interceptors.request.eject(this.requestBack);
        }
        this.service.interceptors.request.use(onFulfilled, onRejected);
    }

    response<T extends AxiosResponse>(onFulfilled?: (value: AxiosResponse) => T | Promise<T>, onRejected?: OnRejected) {
        if(this.responsBack !== void 0) {
            this.service.interceptors.response.eject(this.responsBack);
        }
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

    download<T = Blob, R = AxiosResponse<T>>(url: string, data?: Record<string, any>, headers?: AxiosRequestHeaders) {
        return this.service.post<T, R>(url, data, {
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
