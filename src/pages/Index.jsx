import { Container, Text, VStack, Button } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to Fitness Tracker</Text>
        <Text>Today's Workout: 30 minutes of cardio</Text>
        <Button colorScheme="teal" size="lg">Start New Workout</Button>
      </VStack>
    </Container>
  );
};

export default Index;