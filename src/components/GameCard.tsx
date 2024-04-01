import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Game } from '../entities/Game'
import getCroppedImageUrl from '../services/image-url'
import CriticScore from './CriticScore'
import PlatformIconList from './PlatformIconList'

interface Props {
    game: Game
}

const GameCard = ({ game }: Props) => {
    return (
        <Card
            borderRadius={10}
            height='100%'
            overflow='hidden'
            _hover={{ transform: 'scale(1.03)', transition: 'transform 0.15s ease-in' }}
        >
            <Image src={getCroppedImageUrl(game.background_image)} />
            <CardBody>
                <HStack justifyContent='space-between' alignItems='start' marginBottom={3}>
                    <PlatformIconList platform={game.parent_platforms?.map((p) => p.platform)} />
                    <CriticScore score={game.metacritic} />
                </HStack>
                <Heading fontSize='2xl'>
                    <Link to={`/games/${game.slug}`}>{game.name}</Link>
                </Heading>
            </CardBody>
        </Card>
    )
}

export default GameCard
