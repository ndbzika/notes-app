import { Button, MenuItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React from 'react'
export function OpenModal() {
    const { isOpen, onOpen, onClose} = useDisclosure()
    return(
        <>
        <MenuItem onClick={onOpen}>Create a Note</MenuItem>
        <Modal 
        isOpen={isOpen} 
        onClose={onClose} 
        isCentered
        motionPreset='slideInBottom'
        >
            <ModalOverlay
            bg='none'
            backdropFilter='auto'
            backdropInvert='80%'
            backdropBlur='2px'
            />
            <ModalContent>
                <ModalHeader>Create a note</ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    {/* colocar form aqui */}
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='red' mr={3} onClick={onClose}>
                        Cancel
                    </Button>
                    <Button colorScheme='green'>
                        Create
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
        </>
    )
}