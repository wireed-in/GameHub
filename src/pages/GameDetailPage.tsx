import { Box, Divider, Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import useGame from "../hooks/useGame";
import GameTrailers from "../components/GameTrailers";
import GameScreenshots from "../components/GameScreenshots";

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
            <GameAttributes game={game} />
            <GameScreenshots gameId={game.id} />
            <GameTrailers gameId={game.id} />
        </Box>
    );
};

export default GameDetailPage;
