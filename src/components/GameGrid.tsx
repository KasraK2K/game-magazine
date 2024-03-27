import { SimpleGrid, Alert, AlertIcon, Box } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import { GameQuery } from '../App'

interface Props {
    gameQuery: GameQuery
}

const GameGrid = ({ gameQuery }: Props) => {
    const { data, error, isLoading } = useGames(gameQuery)
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    if (error)
        return (
            <Box padding='10px'>
                <Alert status='error' borderRadius={10}>
                    <AlertIcon />
                    {error.message}
                </Alert>
            </Box>
        )
    return (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding='10px' spacing={6}>
            {isLoading && skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
            {data?.map((game) => <GameCard key={game.id} game={game} />)}
        </SimpleGrid>
    )
}

export default GameGrid
