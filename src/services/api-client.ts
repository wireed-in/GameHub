import axios, { AxiosRequestConfig, CanceledError } from "axios";

export interface FetchResponse<T> {
    results: T[];
}

const axiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "993c16f2cb57403d95b535ea5a063277",
    },
});

class ApiClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (requestConfig?: AxiosRequestConfig) =>
        axiosInstance
            .get<FetchResponse<T>>(this.endpoint, requestConfig)
            .then((res) => res.data);
}

export default ApiClient;
