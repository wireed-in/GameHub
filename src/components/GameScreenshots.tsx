import { Box, Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import useGameScreenshots from "../hooks/useGameScreenshots";

interface Props {
    gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
    const { data, isLoading, error } = useGameScreenshots(gameId);

    if (isLoading) return <Spinner />;
    if (error) throw error;

    if (data?.results && data.results.length === 0) return null;

    return (
        <Box>
            <SimpleGrid columns={{ sm: 1, md: 2 }} marginTop={5} spacing={2}>
                {data?.results.map((screenshot) => (
                    <Image key={screenshot.id} src={screenshot.image} />
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default GameScreenshots;
