import apiClient from '../services/api-client'
import { GameQuery } from '../App'
import { Platform } from './usePlatforms'
import { useQuery } from '@tanstack/react-query'

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
    }

    const fetchData = () =>
        apiClient
            .request({
                method: 'GET',
                url: '/games',
                params,
            })
            .then((response) => response.data.results)

    return useQuery<Game[]>({
        queryKey: ['games', params],
        queryFn: fetchData,
        staleTime: 10_000,
    })
}

export default useGames
