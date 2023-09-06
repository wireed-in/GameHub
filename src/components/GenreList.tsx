import { HStack, Image, List, ListItem, Button, Link } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
    onSelectGenre: (selectedGenre: number) => void;
    selectedGenre: number | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
    const { data: genres, error, isLoading } = useGenres();

    if (error) return null;

    return (
        <>
            {isLoading &&
                [...Array(10)].map((_, index) => <GenreSkeleton key={index} />)}
            <List>
                {genres.map((genre) => (
                    <ListItem
                        backgroundColor={
                            selectedGenre === genre.id ? "gray.600" : "none"
                        }
                        padding="5px"
                        borderRadius="md"
                        key={genre.id}
                    >
                        <HStack>
                            <Image
                                borderRadius="md"
                                boxSize="32px"
                                src={getCroppedImageUrl(genre.image_background)}
                            />
                            <Button
                                onClick={() => onSelectGenre(genre.id)}
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
