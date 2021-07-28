import { Flex, Image, Text } from "@chakra-ui/react";

interface TravelItemsProps {
    icon: string;
    label: string;
}

export function TravelItems({ icon, label }: TravelItemsProps) {
    return(
        <Flex 
            w='17rem'
            direction='column'
            alignItems='center'
            justifyContent='center'
        >
            <Image src={`./${ icon }.svg`}/>
            <Text
                fontSize='lg'
                fontWeight='semibold'
                mt='1.5rem'
                color='gray.500'
            >
                { label }
            </Text>
        </Flex>
    )
}