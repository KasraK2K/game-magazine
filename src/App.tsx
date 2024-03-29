import { useState } from 'react'
import { Grid, GridItem, Show, HStack, Box } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import PlatformSelector from './components/PlatformSelector'
import SortSelector from './components/SortSelector'
import GameHeading from './components/GameHeading'
import { Genre } from './hooks/useGenres'
import { Platform } from './hooks/usePlatforms'

export interface GameQuery {
    genre: Genre | null
    platform: Platform | null
    sortOrder: string
    searchText: string
    pageSize: number
}

function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

    return (
        <Grid
            templateAreas={{ base: `'nav' 'main'`, lg: `'nav nav' 'aside main'` }}
            templateColumns={{ base: '1fr', lg: '200px 1fr' }}
        >
            <GridItem area='nav'>
                <NavBar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })} />
            </GridItem>
            <Show above='lg'>
                <GridItem area='aside' paddingX={4}>
                    <GenreList
                        selectedGenre={gameQuery.genre}
                        onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
                    />
                </GridItem>
            </Show>
            <GridItem area='main'>
                <Box marginLeft={2}>
                    <GameHeading gameQuery={gameQuery} />
                    <HStack spacing={5} marginBottom={5}>
                        <PlatformSelector
                            selectedPlatform={gameQuery.platform}
                            onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })}
                        />
                        <SortSelector
                            sortOrder={gameQuery.sortOrder}
                            onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })}
                        />
                    </HStack>
                </Box>
                <GameGrid gameQuery={gameQuery} />
            </GridItem>
        </Grid>
    )
}

export default App
