import { HStack, Icon, Switch, useColorMode } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ColorModeSwitch = () => {
    const { toggleColorMode, colorMode } = useColorMode()

    return (
        <HStack>
            <Icon as={SunIcon} />
            <Switch colorScheme='green' isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
            <Icon as={MoonIcon} />
        </HStack>
    )
}

export default ColorModeSwitch
