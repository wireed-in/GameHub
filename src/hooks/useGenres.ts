import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";

interface Genre {
    id: number;
    name: string;
    image_background: string;
}

interface GenresResponse {
    count: number;
    results: Genre[];
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState();
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const abortController = new AbortController();
        setLoading(true);

        apiClient
            .get<GenresResponse>("/genres", { signal: abortController.signal })
            .then(({ data }) => {
                setGenres(data.results);
                setLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            });

        return () => abortController.abort();
    }, []);

    return { genres, error, isLoading };
};

export default useGenres;
