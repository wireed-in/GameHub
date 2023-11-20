import { create } from "zustand";

export interface GamesQueryParams {
    selectedGenreId?: number;
    selectedPlatformId?: number;
    selectedSortOrder?: string;
    searchText?: string;
}

interface GameQueryStore {
    gameQuery: GamesQueryParams;
    setSelectedGenreId: (genreId: number) => void;
    setSelectedPlatformId: (platformId: number) => void;
    setSelectedSortOrder: (sortOrder: string) => void;
    setSelectedSearchText: (searchText: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
    gameQuery: {},
    setSelectedGenreId: (genreId) =>
        set((store) => ({
            gameQuery: { ...store.gameQuery, selectedGenreId: genreId },
        })),
    setSelectedPlatformId: (platformId) =>
        set((store) => ({
            gameQuery: { ...store.gameQuery, selectedPlatformId: platformId },
        })),
    setSelectedSortOrder: (sortOrder) =>
        set((store) => ({
            gameQuery: { ...store.gameQuery, selectedSortOrder: sortOrder },
        })),
    setSelectedSearchText: (searchText) =>
        set(() => ({ gameQuery: { searchText: searchText } })),
}));

export default useGameQueryStore;
