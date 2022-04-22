import "axios";

/**
 *  @description response list data
 */
export interface ListData<T = any> {
    readonly list: Array<T>;
    readonly page: number;
    readonly size: number;
    readonly total: number;
}
/**
 * response data
 */
export interface ResponseResult<T> {
    readonly code: number;
    readonly data: T extends Array<infer R> ? ListData<R> : T;
    readonly message: string;
}

declare module "axios" {
    export interface AxiosInstance {
        request<T = any, R = ResponseResult<T>>(config: AxiosRequestConfig): Promise<R>;
        get<T = any, R = ResponseResult<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
        delete<T = any, R = ResponseResult<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
        head<T = any, R = ResponseResult<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
        options<T = any, R = ResponseResult<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
        post<T = any, R = ResponseResult<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R>;
        put<T = any, R = ResponseResult<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R>;
        patch<T = any, R = ResponseResult<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R>;
    }
}
