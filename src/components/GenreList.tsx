import { HStack, Image, List, ListItem, Spinner, Button, Heading } from '@chakra-ui/react'
import useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'

interface Props {
    selectedGenre: Genre | null
    onSelectGenre: (genre: Genre) => void
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
    const { data, error, isLoading } = useGenres()

    if (error) return null
    if (isLoading) return <Spinner />
    return (
        <>
            <Heading fontSize='2xl' marginBottom={3}>
                Genres
            </Heading>
            <List>
                {data?.map((genre) => (
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
