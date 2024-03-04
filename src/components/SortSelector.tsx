import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

// interface Props {
// }

const SortSelector = () => {
    // if (error) return null
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order by: Relevance
            </MenuButton>
            <MenuList>
                <MenuItem>Relevance</MenuItem>
                <MenuItem>Name added</MenuItem>
                <MenuItem>Name</MenuItem>
                <MenuItem>Release Date</MenuItem>
                <MenuItem>Popularity</MenuItem>
                <MenuItem>Average rating</MenuItem>
            </MenuList>
        </Menu>
    )
}

export default SortSelector
