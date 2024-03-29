import { Alert, AlertIcon, Box, SimpleGrid, Spinner } from '@chakra-ui/react'
import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { GameQuery } from '../App'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'

interface Props {
    gameQuery: GameQuery
}

const GameGrid = ({ gameQuery }: Props) => {
    const { data, error, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage } = useGames(gameQuery)
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

    const fetchedGameCount = data?.pages.reduce((total, page) => total + page.results.length, 0) ?? 0

    return (
        <InfiniteScroll
            dataLength={fetchedGameCount}
            hasMore={hasNextPage}
            next={() => fetchNextPage()}
            loader={<Spinner />}
        >
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6} padding='10px'>
                {isLoading && isFetchingNextPage && skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
                {data?.pages.map((page, index) => (
                    <React.Fragment key={index}>
                        {page.results.map((game) => (
                            <GameCard key={game.id} game={game} />
                        ))}
                    </React.Fragment>
                ))}
            </SimpleGrid>
        </InfiniteScroll>
    )
}

export default GameGrid
