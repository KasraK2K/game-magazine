import { useQuery } from '@tanstack/react-query'
import ms from 'ms'
import platforms from '../data/platforms'
import { Platform } from '../entities/Platform'
import apiClient, { FetchResponse } from '../services/api-client'

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
