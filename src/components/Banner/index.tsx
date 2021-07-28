import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export function Banner() {
    return(
        <Box
            h={['16rem', '20rem']}
            w='100%'
            bg='blue.500'
            bgImage='url(./background_home.png)'
            bgRepeat='no-repeat'
            bgSize='cover'
        >
            <Flex
                w='100%'
                maxWidth={1416}
                px={['4', '2']}
                py={['10', '20']}
                m='0 auto'
                justifyContent='space-between'
            >
                <Flex direction='column'>
                    <Heading color='gray.50'>5 Continentes,<br/>infinitas possibilidades</Heading>
                    <Text 
                        mt='5'
                        w={['100%', '80%']}
                        color='gray.300'
                        fontSize={['lg', 'xl']}
                    >
                        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                    </Text>
                </Flex>

                <Box
                    mt='-5'
                    maxWidth='50%'
                    d={['none', 'flex']}
                >
                    <Image src='./airplane.svg'/>
                </Box>
            </Flex>
        </Box>
    )
}