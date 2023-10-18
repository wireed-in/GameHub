import axios, { CanceledError } from "axios";

export interface FetchResponse<T> {
    results: T[];
}

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "993c16f2cb57403d95b535ea5a063277",
    },
});

export { CanceledError };
