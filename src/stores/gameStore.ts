import { create } from 'zustand'

export interface GameQuery {
    searchText?: string
    genreId?: number
    platformId?: number
    sortOrder?: string
    pageSize?: number
}

interface GameQueryStore {
    gameQuery: GameQuery
    setSearchText: (searchText: string) => void
    setGenreId: (genreId?: number) => void
    setPlatformId: (PlatformId?: number) => void
    setSortOrder: (sortOrder: string) => void
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
    gameQuery: {},
    setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
    setGenreId: (genreId) => set((store) => ({ gameQuery: { ...store, genreId } })),
    setPlatformId: (platformId) => set((store) => ({ gameQuery: { ...store, platformId } })),
    setSortOrder: (sortOrder) => set((store) => ({ gameQuery: { ...store, sortOrder } })),
}))

export default useGameQueryStore
