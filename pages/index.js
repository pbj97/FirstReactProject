import { Container, Box, Heading } from '@chakra-ui/react';
const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        안녕하세요! 서울에 살고 있는 프론트엔드 개발자 박범진이라고 합니다.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            박범진
          </Heading>
          <p>그냥 이것저것 잡다하게 하는 공돌이 인생</p>
        </Box>
      </Box>
    </Container>
  );
};

export default Page;
