import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms, { Platform } from '../hooks/usePlatforms'

interface Props {
    selectedPlatform: Platform | null
    onSelectPlatform: (platformId: Platform) => void
}

const PlatformSelector = ({ selectedPlatform, onSelectPlatform }: Props) => {
    const { data, error } = usePlatforms()

    if (error) return null
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {selectedPlatform?.name ?? 'Platform'}
            </MenuButton>
            <MenuList>
                <MenuItem onClick={() => onSelectPlatform({} as Platform)}>Platform</MenuItem>
                {data.map((platform) => (
                    <MenuItem
                        key={platform.id}
                        value={platform.id}
                        onClick={() => onSelectPlatform(platform)}
                        textColor={platform.id === selectedPlatform?.id ? 'green.300' : ''}
                    >
                        {platform.name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector
