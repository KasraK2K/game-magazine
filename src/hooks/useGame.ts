import { useQuery } from '@tanstack/react-query'
import ms from 'ms'
import { Game } from '../entities/Game'
import apiClient from '../services/api-client'

const useGame = (slug: string) =>
    useQuery({
        queryKey: ['games', slug],
        queryFn: () => apiClient.get<Game>(`/games/${slug}`),
        staleTime: ms('24h'),
    })

export default useGame
