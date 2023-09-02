import { HStack, Text, Image, List, ListItem } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
    const { data: genres, error, isLoading } = useGenres();

    return (
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
    );
};

export default GenreList;
