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
                        selectedGenre={queryParams?.selectedGenre}
                        onSelectGenre={(selectedGenreId) =>
                            setQueryParams({
                                ...queryParams,
                                selectedGenre: selectedGenreId,
                            })
                        }
                    />
                </GridItem>
            </Show>
            <GridItem area={"main"}>
                <HStack spacing={5} paddingLeft={2} marginBottom={5}>
                    <PlatformSelector
                        selectedPlatform={queryParams.selectedPlatform}
                        onPlatformSelect={(selectedPlatformId) =>
                            setQueryParams({
                                ...queryParams,
                                selectedPlatform: selectedPlatformId,
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
