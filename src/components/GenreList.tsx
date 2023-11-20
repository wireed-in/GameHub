import {
    HStack,
    Image,
    List,
    ListItem,
    Button,
    Heading,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";
import useGameQueryStore from "../store";

const GenreList = () => {
    const { data: genres, error, isLoading } = useGenres();
    const selectedGenreId = useGameQueryStore(
        (x) => x.gameQuery.selectedGenreId
    );
    const setSelectedGenreId = useGameQueryStore((x) => x.setSelectedGenreId);

    if (error) return null;

    return (
        <>
            <Heading
                fontSize="2xl"
                marginY={2}
                paddingY={2}
                borderBottom="solid"
                borderColor={"gray.700"}
            >
                Genres
            </Heading>
            {isLoading &&
                [...Array(10)].map((_, index) => <GenreSkeleton key={index} />)}
            <List>
                {genres?.results.map((genre) => (
                    <ListItem
                        backgroundColor={
                            selectedGenreId === genre.id ? "gray.600" : "none"
                        }
                        padding="5px"
                        borderRadius="md"
                        key={genre.id}
                    >
                        <HStack>
                            <Image
                                borderRadius="md"
                                boxSize="32px"
                                objectFit="cover"
                                src={getCroppedImageUrl(genre.image_background)}
                            />
                            <Button
                                onClick={() => setSelectedGenreId(genre.id)}
                                variant="link"
                                fontSize={"lg"}
                            >
                                {genre.name.length < 12
                                    ? genre.name
                                    : genre.name.substring(0, 12) + "..."}
                            </Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default GenreList;
