import { Box, SimpleGrid, Spinner } from "@chakra-ui/react";
import useGameTrailer from "../hooks/useGameTrailers";

interface Props {
    gameId: number;
}

const GameTrailers = ({ gameId }: Props) => {
    const { data, isLoading, error } = useGameTrailer(gameId);

    if (isLoading) return <Spinner />;
    if (error) throw error;

    return (
        <SimpleGrid columns={{ sm: 1, md: 2 }} marginTop={5} spacing={10}>
            {data?.results.map((trailer) => (
                <Box margin={1}>
                    <video
                        src={trailer.data[480]}
                        controls
                        poster={trailer.preview}
                    />
                </Box>
            ))}
        </SimpleGrid>
    );
};

export default GameTrailers;
