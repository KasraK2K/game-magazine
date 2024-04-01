import { Heading, Spinner } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import ExpandableText from '../components/ExpandableText'
import GameAttributes from '../components/GameAttributes'
import useGame from '../hooks/useGame'

const GameDetailPage = () => {
    const { slug } = useParams()
    const { data: game, isLoading, error } = useGame(slug!)

    if (isLoading) return <Spinner />
    if (error) throw error
    if (!game) throw new Error(`Game with slug '${slug}' not found`)
    return (
        <>
            <Heading>{game.name}</Heading>
            <ExpandableText>{game.description_raw}</ExpandableText>
            <GameAttributes game={game} />
        </>
    )
}

export default GameDetailPage
