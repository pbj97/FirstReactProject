import Head from 'next/head';
import NavBar from '../navbar';
import { Box, Container } from '@chakra-ui/react';

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Beomjin's homepage" />
        <meta name="author" content="Park Beomjin" />
        <meta name="author" content="beomjin" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Park Beomjin" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@beomjin" />
        <meta name="twitter:creator" content="@beomjin" />
        <meta name="twitter:image" content="https://www.craftz.dog/card.png" />
        <meta property="og:site_name" content="Park Beomjin" />
        <meta name="og:title" content="Park Beomjin" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.craftz.dog/card.png" />
        <title>Parkbeomjin - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  );
};

export default Main;
