import { useQuery } from '@tanstack/react-query'
import ms from 'ms'
import apiClient from '../services/api-client'
import { Game } from './useGames'

const useGame = (slug: string) =>
    useQuery({
        queryKey: ['games', slug],
        queryFn: () => apiClient.get<Game>(`/games/${slug}`),
        staleTime: ms('24h'),
    })

export default useGame
