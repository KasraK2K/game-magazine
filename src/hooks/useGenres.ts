import { useQuery } from '@tanstack/react-query'
import ms from 'ms'
import genres from '../data/genres'
import apiClient, { FetchResponse } from '../services/api-client'

export interface Genre {
    id: number
    name: string
    image_background: string
}

const useGenres = () => {
    return useQuery<FetchResponse<Genre>>({
        queryKey: ['genres'],
        queryFn: () => apiClient.get<FetchResponse<Genre>>('/genres'),
        retry: 1,
        staleTime: ms('24h'),
        initialData: genres,
    })
}

export default useGenres
