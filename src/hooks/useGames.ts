import useData from "./useData";

export interface GamesQueryParams {
    selectedGenre: number | null;
    selectedPlatform: number | null;
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

interface Platform {
    id: string;
    name: string;
    slug: string;
}

const useGames = (queryParams: GamesQueryParams) =>
    useData<Game>(
        "/games",
        {
            params: {
                genres: queryParams.selectedGenre,
                parent_platforms: queryParams.selectedPlatform,
                ordering: queryParams.selectedSortOrder,
                search: queryParams.searchText,
            },
        },
        [queryParams]
    );

export default useGames;
