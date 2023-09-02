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

const useGames = () => useData<Game>("/games");

export default useGames;
