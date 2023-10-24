import { useQuery } from "@tanstack/react-query";
import ApiClient, { FetchResponse } from "../services/api-client";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";

const apiClient = new ApiClient<Game>("/games");

export interface GamesQueryParams {
    selectedGenre: Genre;
    selectedPlatform: Platform;
    selectedSortOrder: string;
    searchText: string;
}

interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}

const useGames = (queryParams: GamesQueryParams) =>
    useQuery<FetchResponse<Game>, Error>({
        queryKey: ["games", queryParams],
        queryFn: () =>
            apiClient.getAll({
                params: {
                    genres: queryParams.selectedGenre?.id,
                    parent_platforms: queryParams.selectedPlatform?.id,
                    ordering: queryParams.selectedSortOrder,
                    search: queryParams.searchText,
                },
            }),
    });

export default useGames;
