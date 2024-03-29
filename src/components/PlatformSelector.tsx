import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms, { Platform } from '../hooks/usePlatforms'
import usePlatform from '../hooks/usePlatform'

interface Props {
    selectedPlatformId?: number
    onSelectPlatform: (platformId: Platform) => void
}

const PlatformSelector = ({ selectedPlatformId, onSelectPlatform }: Props) => {
    const { data, error } = usePlatforms()
    const selectedPlatform = usePlatform(selectedPlatformId)

    if (error) return null
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {selectedPlatform?.name ?? 'Platform'}
            </MenuButton>
            <MenuList>
                <MenuItem onClick={() => onSelectPlatform({} as Platform)}>Platform</MenuItem>
                {data?.results.map((platform) => (
                    <MenuItem
                        key={platform.id}
                        value={platform.id}
                        onClick={() => onSelectPlatform(platform)}
                        textColor={platform.id === selectedPlatformId ? 'green.300' : ''}
                    >
                        {platform.name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector
