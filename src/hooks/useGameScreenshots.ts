import { useQuery } from "@tanstack/react-query";
import ApiClient, { FetchResponse } from "../services/api-client";
import { GameScreenshot } from "../entities/GameScreenshot";

const useGameScreenshots = (id: number) => {
    const apiClient = new ApiClient<GameScreenshot>(`/games/${id}/screenshots`);

    return useQuery<FetchResponse<GameScreenshot>>({
        queryKey: ["screenshots", `games/${id}`],
        queryFn: () => apiClient.getAll(),
    });
};

export default useGameScreenshots;
