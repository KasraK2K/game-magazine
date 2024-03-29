import { useQuery } from '@tanstack/react-query'
import ms from 'ms'
import platforms from '../data/platforms'
import apiClient, { FetchResponse } from '../services/api-client'

export interface Platform {
    id: number
    name: string
    slug: string
}

const usePlatforms = () => {
    return useQuery<FetchResponse<Platform>>({
        queryKey: ['platforms', 'lists', 'parents'],
        queryFn: () => apiClient.get<FetchResponse<Platform>>('/platforms/lists/parents'),
        retry: 1,
        staleTime: ms('24h'),
        initialData: platforms,
    })
}

export default usePlatforms
