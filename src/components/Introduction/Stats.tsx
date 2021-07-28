import { Box, Button, Flex, Heading, Stack, Text, Tooltip } from "@chakra-ui/react";
import { FiInfo } from "react-icons/fi";

export function Stats() {
    return(
        <Stack direction='row' spacing={['1rem', '10rem']} mt={['2', '0']}>
            <Box>
                <Heading 
                    color='yellow.400'
                    textAlign={['left', 'center']}
                    size='2xl'
                >
                    50
                </Heading>
                <Text
                    textAlign={['left', 'center']}
                    fontWeight='semibold'
                    color='gray.500'
                    fontSize='lg'
                >
                    países
                </Text>
            </Box>
            <Box>
                <Heading 
                    color='yellow.400'
                    textAlign={['left', 'center']}
                    size='2xl'
                >
                    60
                </Heading>
                <Text
                    textAlign={['left', 'center']}
                    fontWeight='semibold'
                    color='gray.500'
                    fontSize='lg'
                >
                    línguas
                </Text>
            </Box>
            <Box>
                <Heading 
                    color='yellow.400'
                    textAlign={['left', 'center']}
                    size='2xl'
                    ml={['6', '0']}
                >
                    27
                </Heading>
                <Flex>
                    <Text
                        textAlign={['left', 'center']}
                        fontWeight='semibold'
                        color='gray.500'
                        fontSize='lg'
                        mr='4'
                        ml='6'
                    >
                        cidades +100
                    </Text>
                    <Tooltip 
                        label='As cidades +100 são as cidades que aquele continente possui que estão entre as 100 cidades mais visitadas do mundo.'
                    >
                        <Button size='sm' variant='unstyled' mt='-.3rem'>
                            <FiInfo color='rgba(153, 153, 153, .5)' cursor='pointer'/>
                        </Button>
                    </Tooltip>
                </Flex>
            </Box>
        </Stack>
    )
}