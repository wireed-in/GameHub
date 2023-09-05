import { HStack, Text, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";

const GenreList = () => {
    const { data: genres, error, isLoading } = useGenres();

    if (error) return null;

    return (
        <>
            {isLoading && [...Array(10)].map((_) => <GenreSkeleton />)}
            <List>
                {genres.map((genre) => (
                    <ListItem paddingY="5px" key={genre.id}>
                        <HStack>
                            <Image
                                borderRadius="md"
                                boxSize="32px"
                                src={getCroppedImageUrl(genre.image_background)}
                            />
                            <Text fontSize={"lg"}>{genre.name}</Text>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default GenreList;
