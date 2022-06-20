import Head from 'next/Head'
import { Box, Container} from '@chakra-ui/react'

const Main = ({Children,router}) => {
    return (
        <Box as="main" pb = {8}>
            <Head>
                <meta name="viewport" content="width=divice-width, initial-scale = 1" />
                <title>Beomjin Park - Homepage</title>
            </Head>
            <Container maxWidth="container.md" pt = {14}>
                 {Children}
            </Container>
        </Box>
    )
}

export default Main