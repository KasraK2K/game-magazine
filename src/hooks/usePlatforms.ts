import { useQuery } from '@tanstack/react-query'
import platforms from '../data/platforms'
import apiClient from '../services/api-client'
import { FetchResponse } from '../services/api-client'

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
        staleTime: 24 * 60 * 60 * 1000,
        initialData: { count: platforms.length, next: null, previous: null, results: platforms },
    })
}

export default usePlatforms
