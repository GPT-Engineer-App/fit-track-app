import { useState, useEffect } from "react";
import { Container, VStack, Box, Text, Button, Input, FormControl, FormLabel, Select, Stack } from "@chakra-ui/react";

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const [workoutType, setWorkoutType] = useState("");
  const [duration, setDuration] = useState("");
  const [intensity, setIntensity] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const storedWorkouts = JSON.parse(localStorage.getItem("workouts")) || [];
    setWorkouts(storedWorkouts);
  }, []);

  const handleAddWorkout = () => {
    const newWorkout = { workoutType, duration, intensity, date };
    const updatedWorkouts = [...workouts, newWorkout];
    setWorkouts(updatedWorkouts);
    localStorage.setItem("workouts", JSON.stringify(updatedWorkouts));
    setWorkoutType("");
    setDuration("");
    setIntensity("");
    setDate("");
  };

  const handleDeleteWorkout = (index) => {
    const updatedWorkouts = workouts.filter((_, i) => i !== index);
    setWorkouts(updatedWorkouts);
    localStorage.setItem("workouts", JSON.stringify(updatedWorkouts));
  };

  return (
    <Container maxW="container.md" mt={5}>
      <VStack spacing={4}>
        <Box p={5} shadow="md" borderWidth="1px" width="100%">
          <Text fontSize="xl">Log a New Workout</Text>
          <Stack spacing={3} mt={3}>
            <FormControl>
              <FormLabel>Workout Type</FormLabel>
              <Input value={workoutType} onChange={(e) => setWorkoutType(e.target.value)} />
            </FormControl>
            <FormControl>
              <FormLabel>Duration (minutes)</FormLabel>
              <Input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} />
            </FormControl>
            <FormControl>
              <FormLabel>Intensity</FormLabel>
              <Select value={intensity} onChange={(e) => setIntensity(e.target.value)}>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Date</FormLabel>
              <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </FormControl>
            <Button colorScheme="teal" onClick={handleAddWorkout}>Add Workout</Button>
          </Stack>
        </Box>
        {workouts.map((workout, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px" width="100%">
            <Text fontSize="xl">{workout.workoutType}</Text>
            <Text>Duration: {workout.duration} mins</Text>
            <Text>Intensity: {workout.intensity}</Text>
            <Text>Date: {workout.date}</Text>
            <Button colorScheme="red" mt={2} onClick={() => handleDeleteWorkout(index)}>Delete</Button>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Workouts;