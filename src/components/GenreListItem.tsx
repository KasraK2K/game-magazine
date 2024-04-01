import { Button, HStack, Image, ListItem } from '@chakra-ui/react'
import { Genre } from '../entities/Genre'
import useGameQueryStore from '../stores/gameStore'

interface Props {
    genre: Genre
}

const GenreListItem = ({ genre }: Props) => {
    const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId)
    const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId)

    return (
        <>
            <ListItem paddingY='5px'>
                <HStack>
                    <Image boxSize='32px' borderRadius={8} src={genre.image_background} objectFit='cover' />
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
        </>
    )
}

export default GenreListItem
