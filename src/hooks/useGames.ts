import { useInfiniteQuery } from '@tanstack/react-query'
import apiClient from '../services/api-client'
import { GameQuery } from '../App'
import { Platform } from './usePlatforms'
import { FetchResponse } from '../services/api-client'

export interface Game {
    id: number
    name: string
    background_image: string
    parent_platforms: { platform: Platform }[]
    metacritic: number
}

const useGames = (gameQuery: GameQuery) => {
    return useInfiniteQuery<FetchResponse<Game>>({
        queryKey: ['games', gameQuery],
        queryFn: ({ pageParam = 1 }) =>
            apiClient.get<FetchResponse<Game>>('/games', {
                params: {
                    genres: gameQuery?.genreId,
                    parent_platforms: gameQuery?.platformId,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.searchText,
                    page_size: gameQuery.pageSize,
                    page: pageParam,
                },
            }),
        retry: 1,
        staleTime: 24 * 60 * 60 * 1000, // 24 Hours
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => (lastPage.next ? allPages.length + 1 : undefined),
        getPreviousPageParam: (lastPage, allPages) => (lastPage.previous ? allPages.length - 1 : undefined),
    })
}

export default useGames
