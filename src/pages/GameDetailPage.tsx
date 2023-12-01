import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Box, Divider, Heading, Spinner, Text } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";

const GameDetailPage = () => {
    const slug = useParams().slug;

    if (!slug) throw new Error("Game slug is missing.");

    const { data: game, isLoading, error } = useGame(slug);

    if (isLoading) return <Spinner />;
    if (error || !game) throw error;

    return (
        <Box padding={5}>
            <Heading>{game.name}</Heading>
            <Divider marginY={2} />
            <ExpandableText>{game.description_raw}</ExpandableText>
        </Box>
    );
};

export default GameDetailPage;
