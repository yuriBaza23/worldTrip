import { Box, Center, Heading, useBreakpointValue } from '@chakra-ui/react'
import { Banner } from '../components/Banner'
import { Divider } from '../components/Divider'
import { Header } from '../components/Header'
import { TravelTypes } from '../components/TravelTypes'
import { Carousel } from '../components/Carousel';

export default function Home() {
  const smallScreen = useBreakpointValue({ sm: true, base: false })

  return (
    <Box>
      <Header/>
      <Banner/>
      <TravelTypes isSm={!smallScreen}/>
      <Center maxWidth={1416} m='0 auto'>
        <Divider/>
      </Center>
      <Box
        w='100%'
        maxWidth={1416}
        m='0 auto'
        py='20'
      >
        <Heading textAlign='center' color='gray.500' mb='4' size={ !smallScreen ? 'md' : 'xl' }>Vamos nessa?</Heading>
        <Heading textAlign='center' color='gray.500' mb='20' size={ !smallScreen ? 'md' : 'xl' }>Então escolha seu continente</Heading>
        <Carousel/>
      </Box>
    </Box>
  )
}
