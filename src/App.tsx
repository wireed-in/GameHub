import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { GamesQueryParams } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

function App() {
    const [queryParams, setQueryParams] = useState<GamesQueryParams>(
        {} as GamesQueryParams
    );

    return (
        <Grid
            templateAreas={{
                base: `"nav" "main"`,
                lg: `"nav nav" "aside main"`,
            }}
            templateColumns={{
                base: "1fr",
                lg: "200px 1fr",
            }}
        >
            <GridItem area={"nav"}>
                <NavBar
                    onSearchInput={(searchText) =>
                        setQueryParams({
                            ...queryParams,
                            searchText: searchText,
                        })
                    }
                />
            </GridItem>
            <Show above="lg">
                <GridItem area={"aside"} paddingX="10px">
                    <GenreList
                        selectedGenreId={queryParams?.selectedGenreId}
                        onSelectGenre={(selectedGenreId) =>
                            setQueryParams({
                                ...queryParams,
                                selectedGenreId: selectedGenreId,
                            })
                        }
                    />
                </GridItem>
            </Show>
            <GridItem area={"main"}>
                <HStack spacing={5} paddingLeft={2} marginBottom={5}>
                    <PlatformSelector
                        selectedPlatformId={queryParams?.selectedPlatformId}
                        onPlatformSelect={(selectedPlatformId) =>
                            setQueryParams({
                                ...queryParams,
                                selectedPlatformId: selectedPlatformId,
                            })
                        }
                    />
                    <SortSelector
                        selectedSortOrder={queryParams.selectedSortOrder}
                        onSelectSortOrder={(selectedSortOrderValue) =>
                            setQueryParams({
                                ...queryParams,
                                selectedSortOrder: selectedSortOrderValue,
                            })
                        }
                    />
                </HStack>
                <GameGrid gamesQuery={queryParams} />
            </GridItem>
        </Grid>
    );
}

export default App;
