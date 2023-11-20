import { Heading } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
import useGameQueryStore from "../store";

const GameHeading = () => {
    const selectedPlatformId = useGameQueryStore(
        (x) => x.gameQuery.selectedPlatformId
    );

    const selectedGenreId = useGameQueryStore(
        (x) => x.gameQuery.selectedGenreId
    );

    const platform = usePlatform(selectedPlatformId);
    const genre = useGenre(selectedGenreId);

    const header = `${platform?.name || ""} ${genre?.name || ""} Games`;

    return <Heading margin={2}>{header}</Heading>;
};

export default GameHeading;
