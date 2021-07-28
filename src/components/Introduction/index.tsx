import { Box, Flex, Text } from "@chakra-ui/react";
import { Stats } from "./Stats";

export function Introduction() {
    return(
        <Box>
            <Flex
                h='100%'
                w='100%'
                maxWidth={1416}
                px={['4', '2']}
                pt={['5', '20']}
                m='0 auto'
                justifyContent='space-between'
                alignItems='center'
                direction={['column', 'row']}
            >
                <Box w={['100%', '47%']}>
                    <Text
                        as='p'
                        fontSize={['lg', 'xl']}
                        lineHeight={['2rem', '2.5rem']}
                        textAlign='justify'
                        color='gray.500'
                    >
                        A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
                    </Text>
                </Box>
                <Box w={['100%', '47%']}>
                    <Stats/>
                </Box>
            </Flex>
        </Box>
    )
}