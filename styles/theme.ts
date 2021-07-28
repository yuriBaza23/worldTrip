import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        gray: {
            '500': '#47585B',
            '400': '#999999',
            '300': '#DADADA',
            '200': 'rgba(153, 153, 153, .5)',
            '100': '#EDF2F7',
            '50': '#F5F8FA'
        },
        yellow: {
            '400': '#FFBA08',
            '300': 'rgba(255, 186, 8, .5)'
        }
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins'
    },
    styles: {
        global: {
            body: {
                bg: 'gray.50',
            }
        }
    }
})