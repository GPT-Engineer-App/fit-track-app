import { Container, VStack, Box, Text, Button } from "@chakra-ui/react";

const workouts = [
  { name: "Cardio Blast", duration: "30 mins", difficulty: "Medium" },
  { name: "Strength Training", duration: "45 mins", difficulty: "Hard" },
  { name: "Yoga", duration: "60 mins", difficulty: "Easy" },
];

const Workouts = () => {
  return (
    <Container maxW="container.md" mt={5}>
      <VStack spacing={4}>
        {workouts.map((workout, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px" width="100%">
            <Text fontSize="xl">{workout.name}</Text>
            <Text>Duration: {workout.duration}</Text>
            <Text>Difficulty: {workout.difficulty}</Text>
            <Button colorScheme="teal" mt={2}>Start Workout</Button>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Workouts;