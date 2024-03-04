import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './hooks/usePlatforms'

export interface GameQuey {
    genre: Genre | null
    platform: Platform | null
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
                <PlatformSelector
                    selectedPlatform={gameQuey.platform}
                    onSelectPlatform={(platform) => setGameQuery({ ...gameQuey, platform })}
                />
                <GameGrid gameQuery={gameQuey} />
            </GridItem>
        </Grid>
    )
}

export default App
