import { Heading, List, Spinner } from '@chakra-ui/react'
import allGamesImage from '../assets/game.jpg'
import useGenres from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'
import GenreListItem from './GenreListItem'

const GenreList = () => {
    const { data, error, isLoading } = useGenres()

    if (error) return null
    if (isLoading) return <Spinner />
    return (
        <>
            <Heading fontSize='2xl' marginBottom={3}>
                Genres
            </Heading>
            <List>
                <GenreListItem
                    genre={{ id: undefined as unknown as number, name: 'All Games', image_background: allGamesImage }}
                />

                {data?.results.map((genre) => (
                    <GenreListItem
                        key={genre.id}
                        genre={{
                            id: genre.id,
                            name: genre.name,
                            image_background: getCroppedImageUrl(genre.image_background),
                        }}
                    />
                ))}
            </List>
        </>
    )
}

export default GenreList
