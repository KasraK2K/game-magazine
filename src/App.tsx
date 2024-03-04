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
}

function App() {
    const [gameQuey, setGameQuery] = useState<GameQuey>({} as GameQuey)

    return (
        <Grid
            templateAreas={{ base: `'nav' 'main'`, lg: `'nav nav' 'aside main'` }}
            templateColumns={{ base: '1fr', lg: '250px 1fr' }}
        >
            <GridItem area='nav'>
                <NavBar />
            </GridItem>
            <Show above='lg'>
                <GridItem area='aside' paddingX={4}>
                    <GenreList
                        selectedGenre={gameQuey.genre}
                        onSelectGenre={(genre) => setGameQuery({ ...gameQuey, genre })}
                    />
                </GridItem>
            </Show>
            <GridItem area='main'>
                <HStack spacing={5} marginLeft={2} marginBottom={5}>
                    <PlatformSelector
                        selectedPlatform={gameQuey.platform}
                        onSelectPlatform={(platform) => setGameQuery({ ...gameQuey, platform })}
                    />
                    <SortSelector
                        sortOrder={gameQuey.sortOrder}
                        onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuey, sortOrder })}
                    />
                </HStack>
                <GameGrid gameQuery={gameQuey} />
            </GridItem>
        </Grid>
    )
}

export default App
