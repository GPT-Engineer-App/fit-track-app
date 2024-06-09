import { Container, VStack, Box, Text, Button, Avatar } from "@chakra-ui/react";

const Profile = () => {
  return (
    <Container maxW="container.md" mt={5}>
      <VStack spacing={4}>
        <Box p={5} shadow="md" borderWidth="1px" width="100%" textAlign="center">
          <Avatar size="xl" name="John Doe" src="https://bit.ly/broken-link" />
          <Text fontSize="xl" mt={2}>John Doe</Text>
          <Text>Age: 30</Text>
          <Text>Fitness Level: Intermediate</Text>
          <Button colorScheme="teal" mt={2}>Edit Profile</Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Profile;