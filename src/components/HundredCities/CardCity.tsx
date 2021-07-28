import { Box, HStack, Image, Stack, Text } from "@chakra-ui/react";

interface CardProps {
    image: string;
    name: string;
    continent: string;
    brand: string;
}

export function CardCity({ image, name, continent, brand }: CardProps) {
    return(
        <Box 
            borderRadius='.25rem'
            h='17.49rem'
            w='16rem'
        >
            <Stack spacing='0' bg='white'>
                <Image
                    src={`../${image}.svg`}
                    w='100%'
                    h='10.81rem'
                    borderTopRadius='.25rem'
                />
                <HStack 
                    p='1.5rem'
                    borderWidth='1px'
                    borderStyle='solid'
                    borderColor='yellow.400'
                    borderTopWidth='0'
                    justifyContent='space-between'
                >
                    <Stack spacing='.75rem'>
                        <Text
                            fontFamily='Barlow'
                            fontWeight='semibold'
                            fontSize='lg'
                            color='grey.500'
                        >
                            { name }
                        </Text>
                        <Text
                            fontFamily='Barlow'
                            fontSize='md'
                            color='grey.500'
                        >
                            { continent }
                        </Text>
                    </Stack>
                    <Image
                        src={`../${brand}.svg`}
                        w='1.875rem'
                        h='1.875rem'
                    />
                </HStack>
            </Stack>
        </Box>
    )
}