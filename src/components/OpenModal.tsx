import { Button, MenuItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { CreateNote } from './Alert'
import { NotesForm } from './NotesForm'
export function OpenModal() {
    const { isOpen, onOpen, onClose} = useDisclosure()

    const handleSubmitNote = () => {
        
    }
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
                        <NotesForm/>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='red' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <CreateNote/>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}