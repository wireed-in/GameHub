import { Box, Divider, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import useGameTrailer from "../hooks/useGameTrailers";

interface Props {
    gameId: number;
}

const GameTrailers = ({ gameId }: Props) => {
    const { data, isLoading, error } = useGameTrailer(gameId);

    if (isLoading) return <Spinner />;
    if (error) throw error;

    if (data?.results && data.results.length === 0) return null;

    return (
        <Box paddingY={5}>
            <Heading size={"lg"} color={"gray.600"}>
                Trailers
            </Heading>
            <Divider marginY={2} />
            <SimpleGrid columns={{ sm: 1, md: 2 }} marginTop={5} spacing={5}>
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
        </Box>
    );
};

export default GameTrailers;
