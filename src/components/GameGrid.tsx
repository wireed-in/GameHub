import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import getCroppedImageUrl from "../services/image-url";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding="10px"
      >
        {games.map((game, index) => (
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
