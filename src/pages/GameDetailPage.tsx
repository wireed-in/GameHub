import {
    Divider,
    GridItem,
    Heading,
    SimpleGrid,
    Spinner,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameScreenshots from "../components/GameScreenshots";
import GameTrailers from "../components/GameTrailers";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
    const slug = useParams().slug;

    if (!slug) throw new Error("Game slug is missing.");

    const { data: game, isLoading, error } = useGame(slug);

    if (isLoading) return <Spinner />;
    if (error || !game) throw error;

    return (
        <SimpleGrid columns={{ sm: 1, md: 2 }} padding={5} spacing={5}>
            <GridItem>
                <Heading>{game.name}</Heading>
                <Divider marginY={2} />
                <ExpandableText>{game.description_raw}</ExpandableText>
                <GameAttributes game={game} />
            </GridItem>
            <GridItem>
                <GameTrailers gameId={game.id} />
                <GameScreenshots gameId={game.id} />
            </GridItem>
        </SimpleGrid>
    );
};

export default GameDetailPage;
