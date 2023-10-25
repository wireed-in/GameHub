import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { GamesQueryParams } from "../hooks/useGames";
import GameCard from "./GameCard";
import getCroppedImageUrl from "../services/image-url";
import GameCardSkeleton from "./GameCardSkeleton";
import GameHeading from "./GameHeading";
import React from "react";

interface Props {
    gamesQuery: GamesQueryParams;
}

const GameGrid = ({ gamesQuery }: Props) => {
    const { data, error, isLoading, fetchNextPage, isFetchingNextPage } =
        useGames(gamesQuery);

    return (
        <Box padding="10px">
            {error && <Text>{error.message}</Text>}
            <GameHeading gamesQuery={gamesQuery} />
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={5}>
                {isLoading &&
                    [...Array(10)].map((_, index) => (
                        <GameCardSkeleton key={`skeleton_${index}`} />
                    ))}
                {data?.pages.map((games, pageIndex) => (
                    <React.Fragment key={`page_${pageIndex}`}>
                        {games.results.map((game, gameIndex) => (
                            <GameCard
                                key={`game_${pageIndex}_${gameIndex}`}
                                title={game.name}
                                background={getCroppedImageUrl(
                                    game.background_image
                                )}
                                platforms={game.parent_platforms.map(
                                    ({ platform }) => platform.slug
                                )}
                                metacritic={game.metacritic}
                            />
                        ))}
                    </React.Fragment>
                ))}
            </SimpleGrid>
            <Button
                marginY={5}
                disabled={isFetchingNextPage}
                onClick={() => fetchNextPage()}
            >
                {isFetchingNextPage ? "Loading" : "Load More"}
            </Button>
        </Box>
    );
};

export default GameGrid;
