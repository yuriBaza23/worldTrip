import { Box, Center, Flex, IconButton, Image } from "@chakra-ui/react";
import { FiChevronLeft } from 'react-icons/fi';

interface HeaderProps {
    isContinentPage?: boolean;
}

export function Header({ isContinentPage = false }: HeaderProps) {
    return(
        <Box
            as='header'
            h='24'
            bg='gray.50'
        >
            { isContinentPage ? (
                <Flex
                    h='100%'
                    w='100%'
                    maxWidth={1416}
                    px='2'
                    m='0 auto'
                    alignItems='center'
                    position='relative'
                >
                    <IconButton 
                        position='absolute'
                        aria-label='Back to home' 
                        icon={<FiChevronLeft/>}
                        bg='gray.50'
                        fontSize='xl'
                        color='gray.500'
                        _hover={{
                            bg: 'gray.300',
                            transitionDuration: '.5s'
                        }}
                    />
                    <Center h='100%' w='100%'>
                        <Image src='../Logo.svg' alt='WorldTrip' aria-label='Logo WorldTrip'/>
                    </Center>
                </Flex>
            ) : (
                <Center h='100%'>
                    <Image src='../Logo.svg' alt='WorldTrip' aria-label='Logo WorldTrip'/>
                </Center>
            ) }
        </Box>
    )
}