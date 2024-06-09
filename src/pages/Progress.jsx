import { Container, VStack, Box, Text } from "@chakra-ui/react";

const Progress = () => {
  return (
    <Container maxW="container.md" mt={5}>
      <VStack spacing={4}>
        <Box p={5} shadow="md" borderWidth="1px" width="100%">
          <Text fontSize="xl">Progress Over Time</Text>
          <Box bg="gray.100" height="200px" mt={2} /> {/* Placeholder for graph */}
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" width="100%">
          <Text fontSize="xl">Achievements</Text>
          <Text mt={2}>- Completed 10 workouts</Text>
          <Text>- Ran 50 miles</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Progress;