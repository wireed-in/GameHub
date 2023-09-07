import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";

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
    useData<Game>(
        "/games",
        {
            params: {
                genres: queryParams.selectedGenre?.id,
                parent_platforms: queryParams.selectedPlatform?.id,
                ordering: queryParams.selectedSortOrder,
                search: queryParams.searchText,
            },
        },
        [queryParams]
    );

export default useGames;
