import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";

interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
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

    useEffect(() => {
        const abortController = new AbortController();

        apiClient
            .get<FetchGamesResponse>("/games", { signal: abortController.signal })
            .then(({ data }) => setGames(data.results))
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
            });

        return () => abortController.abort();
    }, []);

    return { games, error };
}

export default useGames;