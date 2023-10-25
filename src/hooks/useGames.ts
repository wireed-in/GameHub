import { useInfiniteQuery } from "@tanstack/react-query";
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
    useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ["games", queryParams],
        queryFn: ({ pageParam = 1 }) =>
            apiClient.getAll({
                params: {
                    genres: queryParams.selectedGenre?.id,
                    parent_platforms: queryParams.selectedPlatform?.id,
                    ordering: queryParams.selectedSortOrder,
                    search: queryParams.searchText,
                    page: pageParam,
                },
            }),
        getNextPageParam: (nextPage, allPages) => {
            return nextPage.next ? allPages.length + 1 : undefined;
        },
        staleTime: 24 * 60 * 60 * 1000, // 24h
    });

export default useGames;
