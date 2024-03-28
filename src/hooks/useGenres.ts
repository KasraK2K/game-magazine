import { useQuery } from '@tanstack/react-query'
import apiClient from '../services/api-client'
import genres from '../data/genres'
import { FetchResponse } from '../services/api-client'

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
        staleTime: 24 * 60 * 60 * 1000, // 24 Hours
        initialData: { count: genres.length, next: null, previous: null, results: genres },
    })
}

export default useGenres
