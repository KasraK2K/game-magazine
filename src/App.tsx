import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'

function App() {
    return (
        <Grid templateAreas={{ base: `'nav' 'main'`, lg: `'nav nav' 'aside main'` }}>
            <GridItem area='nav'>
                <NavBar />
            </GridItem>
            <Show above='lg'>
                <GridItem area='aside' maxWidth='200px'>
                    <GenreList />
                </GridItem>
            </Show>
            <GridItem area='main' minWidth='calc(100vw - 200px)'>
                <GameGrid />
            </GridItem>
        </Grid>
    )
}

export default App
