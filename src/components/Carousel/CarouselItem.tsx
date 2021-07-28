import { Box, Flex, Heading, Text } from "@chakra-ui/react";

interface CarouselItemProps {
    image: string;
    continent: string;
    phrase: string;
}

export function CarouselItem({ image, continent, phrase}: CarouselItemProps) {
    return(
        <Flex
            h={['20rem', '27rem']}
            bg='gray.200'
            bgImage={`url(./${ image }.svg)`}
            bgSize='cover'
            alignItems='center'
            justifyContent='center'
        >
            <Box>
                <Heading fontWeight='bold' color='gray.50' size='2xl' mb='4' textAlign='center'>{ continent }</Heading>
                <Text fontWeight='bold' color='gray.300' fontSize='2xl' textAlign='center'>{ phrase }</Text>
            </Box>
        </Flex>
    )
}