import { Button, HStack, Heading, Image, List, ListItem, Spinner } from '@chakra-ui/react'
import allGamesImage from '../assets/game.jpg'
import useGenres from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'
import useGameQueryStore from '../stores/gameStore'

const GenreList = () => {
    const { data, error, isLoading } = useGenres()
    const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId)
    const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId)

    if (error) return null
    if (isLoading) return <Spinner />
    return (
        <>
            <Heading fontSize='2xl' marginBottom={3}>
                Genres
            </Heading>
            <List>
                {/* START: All games */}
                <HStack>
                    <Image boxSize='32px' borderRadius={8} src={allGamesImage} objectFit='cover' />
                    <Button
                        whiteSpace='normal'
                        textAlign='left'
                        fontWeight={setSelectedGenreId === undefined ? 'bold' : 'normal'}
                        onClick={() => setSelectedGenreId(undefined)}
                        fontSize='large'
                        variant='link'
                    >
                        All Games
                    </Button>
                </HStack>
                {/* END */}

                {/* START: Other types of games */}
                {data?.results.map((genre) => (
                    <ListItem key={genre.id} paddingY='5px'>
                        <HStack>
                            <Image
                                boxSize='32px'
                                borderRadius={8}
                                src={getCroppedImageUrl(genre.image_background)}
                                objectFit='cover'
                            />
                            <Button
                                whiteSpace='normal'
                                textAlign='left'
                                fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'}
                                onClick={() => setSelectedGenreId(genre.id)}
                                fontSize='large'
                                variant='link'
                            >
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                ))}
                {/* END */}
            </List>
        </>
    )
}

export default GenreList
