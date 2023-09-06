import { AxiosRequestConfig } from "axios";
import apiClient from "./api-client";

class HttpService {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll<T>(requestConfig?: AxiosRequestConfig) {
        const abortController = new AbortController();

        const request = apiClient.get<T>(this.endpoint, {
            signal: abortController.signal,
            ...requestConfig,
        });

        return { request, cancel: () => abortController.abort() };
    }
}

const createHttpService = (endpoint: string) => new HttpService(endpoint);

export default createHttpService;
