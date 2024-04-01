import { useQuery } from '@tanstack/react-query'
import ms from 'ms'
import { Trailer } from '../entities/Trailer'
import apiClient, { FetchResponse } from '../services/api-client'

const useTrailers = (gameId: number) =>
    useQuery({
        queryKey: ['trailers', gameId],
        queryFn: () => apiClient.get<FetchResponse<Trailer>>(`/games/${gameId}/movies`),
        staleTime: ms('24h'),
    })

export default useTrailers
