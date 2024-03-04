import { useState } from 'react'
import { Grid, GridItem, Show, HStack } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import PlatformSelector from './components/PlatformSelector'
import SortSelector from './components/SortSelector'
import { Genre } from './hooks/useGenres'
import { Platform } from './hooks/usePlatforms'

export interface GameQuey {
    genre: Genre | null
    platform: Platform | null
    sortOrder: string
    searchText: string
}

function App() {
    const [gameQuery, setGameQuery] = useState<GameQuey>({} as GameQuey)

    return (
        <Grid
            templateAreas={{ base: `'nav' 'main'`, lg: `'nav nav' 'aside main'` }}
            templateColumns={{ base: '1fr', lg: '250px 1fr' }}
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
                <HStack spacing={5} marginLeft={2} marginBottom={5}>
                    <PlatformSelector
                        selectedPlatform={gameQuery.platform}
                        onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })}
                    />
                    <SortSelector
                        sortOrder={gameQuery.sortOrder}
                        onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })}
                    />
                </HStack>
                <GameGrid gameQuery={gameQuery} />
            </GridItem>
        </Grid>
    )
}

export default App
