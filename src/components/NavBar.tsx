import { HStack, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import gameMagLogo from '../assets/game_mag.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

const NavBar = () => {
    return (
        <HStack width='100%' padding='10px'>
            <Link to='/'>
                <Image src={gameMagLogo} boxSize='60px' objectFit='cover' />
            </Link>
            <SearchInput />
            <ColorModeSwitch />
        </HStack>
    )
}

export default NavBar
