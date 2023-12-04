import { Box, Spinner } from "@chakra-ui/react";
import useGameTrailer from "../hooks/useGameTrailers";

interface Props {
    gameId: number;
}

const GameTrailers = ({ gameId }: Props) => {
    const { data, isLoading, error } = useGameTrailer(gameId);

    if (isLoading) return <Spinner />;
    if (error) throw error;

    if (data?.results && data.results.length === 0) return null;
    const trailer = data?.results[0];

    return (
        <Box marginTop={2}>
            <video
                src={trailer?.data[480]}
                controls
                poster={trailer?.preview}
            />
        </Box>
    );
};

export default GameTrailers;
