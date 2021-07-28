import { Box, Flex, Heading } from "@chakra-ui/react";

export function ContinentBanner() {
    return(
        <Box
            h={['16rem', '30rem']}
            bg='gray.300'
            bgImage='url(../europe_continent.svg)'
            bgSize='cover'
            backgroundPosition='bottom'
        >
            <Flex
                h='100%'
                w='100%'
                maxWidth={1416}
                px='2'
                py='20'
                m='0 auto'
                alignItems={['center', 'flex-end']}
                justifyContent={['center', 'flex-start']}
            >
                <Heading size='2xl' color='gray.50'>Europa</Heading>
            </Flex>
        </Box>
    )
}