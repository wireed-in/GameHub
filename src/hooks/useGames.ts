import useData from "./useData";

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

const useGames = (
    selectedGenre: number | null,
    selectedPlatform: number | null
) =>
    useData<Game>(
        "/games",
        {
            params: {
                genres: selectedGenre,
                parent_platforms: selectedPlatform,
            },
        },
        [selectedGenre, selectedPlatform]
    );

export default useGames;
