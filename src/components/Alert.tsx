import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, CloseButton, useDisclosure, Button } from "@chakra-ui/react";

export function CreateNote() {
    const {
        isOpen: isVisible,
        onClose,
        onOpen,
    } = useDisclosure({ defaultIsOpen: false })
    return (
        <>
            <Button colorScheme='green' onClick={onOpen}>
                Create
            </Button>
            {isVisible ? <Alert status="success" sx={{position:'absolute', top:'36.4rem', left:'35.7rem'}}>
                <AlertIcon/>
                <Box>
                    <AlertTitle>Sucesso!</AlertTitle>
                    <AlertDescription>
                        Nota criada com sucesso. Parabéns!
                    </AlertDescription>
                </Box>
                <CloseButton
                    alignSelf='flex-start'
                    position='relative'
                    right={-1}
                    left={12}
                    top={-1}
                    flex={1}
                    onClick={onClose}
                />
            </Alert>: null}
        </>
    )
} 
