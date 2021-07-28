import { Box, HStack, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { TravelItems } from "./TravelItems";

export function TravelTypes({ isSm }: { isSm: boolean }) {
    return(
        <Box
            w='100%'
            maxWidth={1416}
            px={['20', '2']}
            py={['10', '20']}
            pb={['20']}
            m='0 auto'
        >
            { isSm ? (
                <Stack spacing='1.5rem'>
                    <HStack justifyContent='space-between'>
                        <Box d='flex' alignItems='center'>
                            <Box w='.5rem' h='.5rem' borderRadius='50%' bg='yellow.500' mr='1rem'/>
                            <Text color='gray.500' fontSize='lg' fontWeight='medium'>vida noturna</Text>
                        </Box>
                        <Box d='flex' alignItems='center'>
                            <Box w='.5rem' h='.5rem' borderRadius='50%' bg='yellow.500' mr='1rem'/>
                            <Text color='gray.500' fontSize='lg' fontWeight='medium'>praia</Text>
                        </Box>
                    </HStack>
                    <HStack justifyContent='space-between'>
                        <Box d='flex' alignItems='center'>
                            <Box w='.5rem' h='.5rem' borderRadius='50%' bg='yellow.500' mr='1rem'/>
                            <Text color='gray.500' fontSize='lg' fontWeight='medium'>moderno</Text>
                        </Box>
                        <Box d='flex' alignItems='center'>
                            <Box w='.5rem' h='.5rem' borderRadius='50%' bg='yellow.500' mr='1rem'/>
                            <Text color='gray.500' fontSize='lg' fontWeight='medium'>clássico</Text>
                        </Box>
                    </HStack>
                    <HStack justifyContent='center'>
                        <Box d='flex' alignItems='center'>
                            <Box w='.5rem' h='.5rem' borderRadius='50%' bg='yellow.500' mr='1rem'/>
                            <Text color='gray.500' fontSize='lg' fontWeight='medium'>e mais</Text>
                        </Box>
                    </HStack>
                </Stack>
            ) : (
                <SimpleGrid columns={5}>
                    <TravelItems label='vida noturna' icon='cocktail'/>
                    <TravelItems label='praia' icon='surf'/>
                    <TravelItems label='moderno' icon='building'/>
                    <TravelItems label='clássico' icon='museum'/>
                    <TravelItems label='e mais...' icon='earth'/>
                </SimpleGrid>
            ) }
        </Box>
    )
}