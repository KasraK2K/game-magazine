import { SimpleGrid, Alert, AlertIcon, Box, Button } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import { GameQuery } from '../App'
import React from 'react'

interface Props {
    gameQuery: GameQuery
}

const GameGrid = ({ gameQuery }: Props) => {
    const { data, error, isLoading, isFetching, isFetchingNextPage, hasNextPage, fetchNextPage } = useGames(gameQuery)
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
        <>
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding='10px' spacing={6}>
                {isLoading && isFetchingNextPage && skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
                {data?.pages.map((page, index) => (
                    <React.Fragment key={index}>
                        {page.results.map((game) => (
                            <GameCard key={game.id} game={game} />
                        ))}
                    </React.Fragment>
                ))}
                {/* {data?.pages.map((game) => )} */}
            </SimpleGrid>
            <Button
                disabled={!hasNextPage || isFetchingNextPage}
                onClick={() => fetchNextPage()}
                marginLeft={2}
                marginTop={4}
            >
                {isFetching && isFetchingNextPage ? 'Fetching...' : 'Load More'}
            </Button>
        </>
    )
}

export default GameGrid
