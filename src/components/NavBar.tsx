import { HStack, Image, Text } from '@chakra-ui/react'
import gameMagLogo from '../assets/game_mag.webp'

const NavBar = () => {
    return (
        <HStack>
            <Image src={gameMagLogo} boxSize='60px' p={1} />
            <Text>NavBar</Text>
        </HStack>
    )
}

export default NavBar
