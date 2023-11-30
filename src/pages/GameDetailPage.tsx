import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Box, Divider, Heading, Spinner, Text } from "@chakra-ui/react";

const GameDetailPage = () => {
    const slug = useParams().slug;

    if (!slug) throw new Error("Game slug is missing.");

    const { data: game, isLoading, error } = useGame(slug);

    if (isLoading) return <Spinner />;
    if (error) throw error;

    return (
        <Box padding={5}>
            <Heading>{game?.name}</Heading>
            <Divider marginY={2} />
            <Text>{game?.description_raw}</Text>
        </Box>
    );
};

export default GameDetailPage;
