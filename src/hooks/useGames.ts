import { GameQuery } from '../App'
import { Platform } from './usePlatforms'
import useInfiniteData from './useInfiniteData'

export interface Game {
    id: number
    name: string
    background_image: string
    parent_platforms: { platform: Platform }[]
    metacritic: number
}

const useGames = (gameQuery: GameQuery) => {
    const params = {
        genres: gameQuery?.genre?.id,
        platforms: gameQuery?.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page_size: gameQuery.pageSize,
    }

    return useInfiniteData<Game>('/games', ['games', params], { params })
}

export default useGames
