import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import { Game } from "../entities/Game";

const apiClient = new ApiClient<Game>("/games");

const useGame = (slug: string) => {
    return useQuery<Game>({
        queryKey: ["games", slug],
        queryFn: () => apiClient.getBySlug(`${slug}`),
    });
};

export default useGame;
