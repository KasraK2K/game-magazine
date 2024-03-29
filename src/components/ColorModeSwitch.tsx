import { HStack, Icon, Switch, useColorMode } from '@chakra-ui/react'
import { CiDark, CiLight } from 'react-icons/ci'

const ColorModeSwitch = () => {
    const { toggleColorMode, colorMode } = useColorMode()

    return (
        <HStack>
            <Icon as={CiLight} boxSize={6} />
            <Switch colorScheme='green' isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
            <Icon as={CiDark} boxSize={6} />
        </HStack>
    )
}

export default ColorModeSwitch
