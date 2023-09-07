import useData from "./useData";

export interface GamesQueryParams {
    selectedGenre: number | null;
    selectedPlatform: number | null;
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
            },
        },
        [queryParams]
    );

export default useGames;
