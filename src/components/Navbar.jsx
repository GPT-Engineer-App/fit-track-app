import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4} py={2}>
      <Flex align="center">
        <Text fontSize="xl" fontWeight="bold" color="white">
          Fitness Tracker
        </Text>
        <Spacer />
        <NavLink to="/" style={{ marginRight: "1rem" }}>
          <Link color="white">Home</Link>
        </NavLink>
        <NavLink to="/workouts" style={{ marginRight: "1rem" }}>
          <Link color="white">Workouts</Link>
        </NavLink>
        <NavLink to="/progress" style={{ marginRight: "1rem" }}>
          <Link color="white">Progress</Link>
        </NavLink>
        <NavLink to="/profile">
          <Link color="white">Profile</Link>
        </NavLink>
      </Flex>
    </Box>
  );
};

export default Navbar;