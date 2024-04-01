import { useQuery } from '@tanstack/react-query'
import Screenshots from '../entities/Screenshots'
import apiClient, { FetchResponse } from '../services/api-client'

const useScreenshots = (gameId: number) =>
    useQuery({
        queryKey: ['screenshots', gameId],
        queryFn: () => apiClient.get<FetchResponse<Screenshots>>(`/games/${gameId}/screenshots`),
    })

export default useScreenshots
