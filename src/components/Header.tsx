import { Box, Heading, Text, Flex, Divider, Center} from '@chakra-ui/react';
import React from 'react';
export function Header() {
    return(
        <>
            <Center>
                <Box maxW='30rem'>
                    <Flex justify='center' align='center' direction='column' gap='2' paddingTop='10'>
                        <Heading as='h1' size='3xl'>
                            Notes App
                        </Heading>
                        <Text as='em'>
                            A simple and functional notes app for all your notes.
                        </Text>
                    </Flex>
                </Box>
            </Center>
            <Divider padding='7'/>
        </>
    )
}