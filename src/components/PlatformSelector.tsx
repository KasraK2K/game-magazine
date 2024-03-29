import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatform from '../hooks/usePlatform'
import usePlatforms from '../hooks/usePlatforms'
import useGameQueryStore from '../stores/gameStore'

const PlatformSelector = () => {
    const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId)
    const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId)

    const { data, error } = usePlatforms()
    const selectedPlatform = usePlatform(selectedPlatformId)

    if (error) return null
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {selectedPlatform?.name ?? 'Platform'}
            </MenuButton>
            <MenuList>
                <MenuItem onClick={() => setSelectedPlatformId(undefined)}>Platform</MenuItem>
                {data?.results.map((platform) => (
                    <MenuItem
                        key={platform.id}
                        value={platform.id}
                        onClick={() => setSelectedPlatformId(platform.id)}
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
