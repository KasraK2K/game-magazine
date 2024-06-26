import { mountStoreDevtool } from 'simple-zustand-devtools'
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
    setGenreId: (genreId) => set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
    setPlatformId: (platformId) => set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
    setSortOrder: (sortOrder) => set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
}))

if (process.env.NODE_ENV === 'development') mountStoreDevtool('Game Store', useGameQueryStore)

export default useGameQueryStore
