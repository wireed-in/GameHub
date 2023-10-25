import { Heading } from "@chakra-ui/react";
import { GamesQueryParams } from "../hooks/useGames";
import usePlatforms from "../hooks/usePlatforms";
import useGenres from "../hooks/useGenres";

interface Props {
    gamesQuery: GamesQueryParams;
}

const GameHeading = ({ gamesQuery }: Props) => {
    const { data: platforms } = usePlatforms();
    const platform = platforms?.results.find(
        (p) => p.id === gamesQuery.selectedPlatformId
    );

    const { data: genres } = useGenres();
    const genre = genres?.results.find(
        (g) => g.id === gamesQuery.selectedGenreId
    );

    const header = `${platform?.name || ""} ${genre?.name || ""} Games`;

    return <Heading margin={2}>{header}</Heading>;
};

export default GameHeading;
