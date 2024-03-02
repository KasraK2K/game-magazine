import { HStack, Image } from '@chakra-ui/react'
import gameMagLogo from '../assets/game_mag.webp'
import ColorModeSwitch from './ColorModeSwitch'

const NavBar = () => {
    return (
        <HStack justifyContent='space-between' padding='10px'>
            <Image src={gameMagLogo} boxSize='60px' />
            <ColorModeSwitch />
        </HStack>
    )
}

export default NavBar
