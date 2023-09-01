import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";

interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
  }
  
interface FetchGamesResponse {
    results: Game[];
}

interface Platform {
    id: string;
    name: string;
    slug: string;
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const abortController = new AbortController();

        setLoading(true);

        apiClient
            .get<FetchGamesResponse>("/games", { signal: abortController.signal })
            .then(({ data }) => {
                setGames(data.results);
                setLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            });

        return () => abortController.abort();
    }, []);

    return { games, error, isLoading };
}

export default useGames;