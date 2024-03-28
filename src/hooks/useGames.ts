import apiClient from '../services/api-client'
import { GameQuery } from '../App'
import { Platform } from './usePlatforms'
import { useInfiniteQuery } from '@tanstack/react-query'

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

    const fetchData = () => apiClient.get('/games', { params }).then((response) => response.data.results)

    return useInfiniteQuery<Game[]>({
        queryKey: ['games', params],
        queryFn: fetchData,
        initialPageParam: 1,
        staleTime: 10_000,
        getNextPageParam: (_lastPage, allPages) => (allPages.length > 0 ? allPages.length + 1 : undefined),
    })
}

export default useGames
