import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { GamesQueryParams } from "../hooks/useGames";
import GameCard from "./GameCard";
import getCroppedImageUrl from "../services/image-url";
import GameCardSkeleton from "./GameCardSkeleton";
import GameHeading from "./GameHeading";

interface Props {
    gamesQuery: GamesQueryParams;
}

const GameGrid = ({ gamesQuery }: Props) => {
    const { data: games, error, isLoading } = useGames(gamesQuery);

    return (
        <>
            {error && <Text>{error.message}</Text>}
            <GameHeading gamesQuery={gamesQuery} />
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
                spacing={5}
                padding="10px"
            >
                {isLoading &&
                    [...Array(10)].map((_, index) => (
                        <GameCardSkeleton key={index} />
                    ))}
                {games?.results.map((game, index) => (
                    <GameCard
                        key={index}
                        title={game.name}
                        background={getCroppedImageUrl(game.background_image)}
                        platforms={game.parent_platforms.map(
                            ({ platform }) => platform.slug
                        )}
                        metacritic={game.metacritic}
                    />
                ))}
            </SimpleGrid>
        </>
    );
};

export default GameGrid;
