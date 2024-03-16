import React, { useState } from "react";
import { Box, Container, VStack, Heading, Input, Button, Text, FormControl, FormLabel, useToast } from "@chakra-ui/react";
import { FaSignInAlt, FaUserPlus, FaListAlt, FaShareSquare } from "react-icons/fa";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const toast = useToast();

  const handleSignup = async (email, password) => {
    // Call the signup API endpoint here
    // For now, just simulate a successful signup
    toast({
      title: "Account created.",
      description: "You have successfully signed up.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    // Typically, you would redirect the user to the login page or log them in directly
  };

  const handleLogin = async (email, password) => {
    // Call the login API endpoint here
    // For now, just simulate a successful login
    setIsLoggedIn(true);
    setUser({ email }); // Assuming the response would have more user info
    toast({
      title: "Logged in.",
      description: "You have successfully logged in.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  // The UI for signup or login
  const AuthForm = ({ isLogin }) => (
    <VStack spacing={4}>
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input placeholder="Enter your email" type="email" />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <Input placeholder="Enter your password" type="password" />
      </FormControl>
      <Button leftIcon={isLogin ? <FaSignInAlt /> : <FaUserPlus />} colorScheme="teal" onClick={() => (isLogin ? handleLogin("demo@example.com", "password") : handleSignup("demo@example.com", "password"))}>
        {isLogin ? "Login" : "Signup"}
      </Button>
    </VStack>
  );

  // The main page content
  return (
    <Container centerContent>
      <Box padding="4" maxWidth="md" width="full">
        <VStack spacing={8}>
          <Heading>Welcome to the Movie List Manager</Heading>
          {!isLoggedIn ? (
            <>
              <AuthForm isLogin={true} />
              <Text>or</Text>
              <AuthForm isLogin={false} />
            </>
          ) : (
            <VStack spacing={4}>
              <Text>Hello, {user.email}! You can now create and share your movie lists.</Text>
              <Button leftIcon={<FaListAlt />} colorScheme="green" onClick={() => navigate("/create-list")}>
                Create New List
              </Button>
              <Button leftIcon={<FaShareSquare />} colorScheme="blue">
                Share a List
              </Button>
            </VStack>
          )}
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;
