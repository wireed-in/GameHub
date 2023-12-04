import {
    Box,
    Divider,
    Heading,
    Image,
    SimpleGrid,
    Spinner,
} from "@chakra-ui/react";
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
        <Box paddingY={5}>
            <Heading size={"lg"} color={"gray.600"}>
                Screenshots
            </Heading>
            <Divider marginY={2} />
            <SimpleGrid columns={{ sm: 1, md: 2 }} marginTop={5} spacing={5}>
                {data?.results.map((screenshot) => (
                    <Image src={screenshot.image} />
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default GameScreenshots;
