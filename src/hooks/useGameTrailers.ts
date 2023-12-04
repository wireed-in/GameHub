import { useQuery } from "@tanstack/react-query";
import ApiClient, { FetchResponse } from "../services/api-client";
import GameTrailer from "../entities/GameTrailer";

const useGameTrailer = (id: number) => {
    const apiClient = new ApiClient<GameTrailer>(`/games/${id}/movies`);

    return useQuery<FetchResponse<GameTrailer>>({
        queryKey: ["trailers", "games/" + id],
        queryFn: () => apiClient.getAll(),
    });
};

export default useGameTrailer;
