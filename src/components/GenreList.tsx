import { HStack, Image, List, ListItem, Text, Spinner, Button } from '@chakra-ui/react'
import useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'

interface Props {
    onSelectGenre: (genre: Genre) => void
    selectedGenre: Genre | null
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
    const { data, error, isLoading } = useGenres()

    if (error) return null
    if (isLoading) return <Spinner />
    return (
        <>
            {error && <Text>{error}</Text>}
            <List>
                {data.map((genre) => (
                    <ListItem key={genre.id} paddingY='5px'>
                        <HStack>
                            <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
                            <Button
                                fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
                                onClick={() => onSelectGenre(genre)}
                                fontSize='large'
                                variant='link'
                            >
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    )
}

export default GenreList
