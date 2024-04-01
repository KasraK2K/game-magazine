import { useQuery } from '@tanstack/react-query'
import ms from 'ms'
import Screenshots from '../entities/Screenshots'
import apiClient, { FetchResponse } from '../services/api-client'

const useScreenshots = (gameId: number) =>
    useQuery({
        queryKey: ['screenshots', gameId],
        queryFn: () => apiClient.get<FetchResponse<Screenshots>>(`/games/${gameId}/screenshots`),
        staleTime: ms('24h'),
    })

export default useScreenshots
