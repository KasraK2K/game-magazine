import { HStack, Image } from '@chakra-ui/react'
import gameMagLogo from '../assets/game_mag.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

const NavBar = () => {
    return (
        <HStack padding='10px'>
            <Image src={gameMagLogo} boxSize='60px' />
            <SearchInput />
            <ColorModeSwitch />
        </HStack>
    )
}

export default NavBar
