import { Heading } from "@chakra-ui/react";
import { GamesQueryParams } from "../hooks/useGames";

interface Props {
    gamesQuery: GamesQueryParams;
}

const GameHeading = ({ gamesQuery }: Props) => {
    const header = `${gamesQuery.selectedPlatform?.name || ""} ${
        gamesQuery.selectedGenre?.name || ""
    } Games`;

    return <Heading margin={2}>{header}</Heading>;
};

export default GameHeading;
