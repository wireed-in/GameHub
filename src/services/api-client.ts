import axios, { CanceledError } from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api/foo",
    params: {
        key: "993c16f2cb57403d95b535ea5a063277"
    }
});

export { CanceledError };