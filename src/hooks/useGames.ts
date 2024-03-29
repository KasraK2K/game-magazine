import { useInfiniteQuery } from '@tanstack/react-query'
import ms from 'ms'
import { GameQuery } from '../App'
import apiClient, { FetchResponse } from '../services/api-client'
import { Platform } from './usePlatforms'

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
        staleTime: ms('24h'),
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => (lastPage.next ? allPages.length + 1 : undefined),
        getPreviousPageParam: (lastPage, allPages) => (lastPage.previous ? allPages.length - 1 : undefined),
    })
}

export default useGames
