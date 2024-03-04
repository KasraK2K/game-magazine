import { GameQuey } from '../App'
import useData from './useData'
import { Platform } from './usePlatforms'

export interface Game {
    id: number
    name: string
    background_image: string
    parent_platforms: { platform: Platform }[]
    metacritic: number
}

const useGames = (gameQuey: GameQuey) =>
    useData<Game>(
        '/games',
        {
            params: {
                genres: gameQuey?.genre?.id,
                platforms: gameQuey?.platform?.id,
                ordering: gameQuey.sortOrder,
                search: gameQuey.searchText,
            },
        },
        [gameQuey],
    )

export default useGames
