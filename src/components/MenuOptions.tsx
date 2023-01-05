import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem, Button, Flex, useDisclosure } from "@chakra-ui/react";
import { OpenModal } from './OpenModal';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

export function MenuOptions() {
    return(
        <Menu>
            {({isOpen}) => (
                <>
                    <MenuButton as={Button} _focus={{boxShadow: 'outiline'}} right='xl' transition='easy 1s'>
                        <Flex justify='center' align='center'>
                            Actions {isOpen ? <FiChevronUp/> :<FiChevronDown/>}
                        </Flex>
                    </MenuButton>
                    <MenuList>
                        <OpenModal/>
                        <MenuItem>See all my notes</MenuItem>
                    </MenuList>
                </>
            )}
        </Menu>
    )
}