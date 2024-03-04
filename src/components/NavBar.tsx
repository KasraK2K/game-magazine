import { HStack, Image } from '@chakra-ui/react'
import gameMagLogo from '../assets/game_mag.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

interface Props {
    onSearch: (searchText: string) => void
}

const NavBar = ({ onSearch }: Props) => {
    return (
        <HStack width='100%' padding='10px'>
            <Image src={gameMagLogo} boxSize='60px' />
            <SearchInput onSearch={onSearch} />
            <ColorModeSwitch />
        </HStack>
    )
}

export default NavBar
