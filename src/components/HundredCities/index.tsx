import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { CardCity } from "./CardCity";

export function HundredCities() {
    return(
        <Box>
            <Flex
                h='100%'
                w='100%'
                maxWidth={1416}
                px={['4', '2']}
                py='5rem'
                m='0 auto'
                justifyContent='space-between'
                alignItems='center'
            >
                <Box w='100%' d='flex' flexDirection='column' alignItems={['center', 'flex-start']}>
                    <Flex w='100%' alignItems='flex-start'>
                        <Text
                            fontFamily='Poppins'
                            fontSize='3xl'
                            color='gray.500'
                            fontWeight='medium'
                        >
                            Cidades +100
                        </Text>
                    </Flex>
                    <SimpleGrid mt='2.5rem' columns={[1, 4, 4, 4, 5]} spacing='2.875rem'>
                        <CardCity image='londres_card' name='Londres' continent='Reino Unido' brand='brand_inglaterra'/>
                        <CardCity image='paris_card' name='Paris' continent='França' brand='brand_franca'/>
                        <CardCity image='roma_card' name='Roma' continent='Itália' brand='brand_italia'/>
                        <CardCity image='roma_card' name='Roma' continent='Itália' brand='brand_italia'/>
                        <CardCity image='praga_card' name='Praga' continent='República Tcheca' brand='brand_republica_tcheca'/>
                        <CardCity image='amsterda_card' name='Amsterdã' continent='Holanda' brand='brand_holanda'/>
                    </SimpleGrid>
                </Box>
            </Flex>
        </Box>
    )
}