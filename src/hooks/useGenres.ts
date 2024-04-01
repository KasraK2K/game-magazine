import { useQuery } from '@tanstack/react-query'
import ms from 'ms'
import genres from '../data/genres'
import { Genre } from '../entities/Genre'
import apiClient, { FetchResponse } from '../services/api-client'

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
