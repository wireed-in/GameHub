import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";

interface Game {
    id: number;
    name: string;
    background_image: string;
  }
  
interface FetchGamesResponse {
    results: Game[];
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