import { useEffect, useState } from "react";
import { CanceledError } from "../services/api-client";
import createHttpService from "../services/http-service";

interface FetchResponse<T> {
    results: T[];
}

const useData = <T>(endpoint: string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState();
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        const { request, cancel } =
            createHttpService(endpoint).getAll<FetchResponse<T>>();

        request
            .then(({ data }) => {
                setData(data.results);
                setLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            });

        return () => cancel();
    }, []);

    return { data, error, isLoading };
};

export default useData;
