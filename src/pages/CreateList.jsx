import React, { useState } from "react";
import { Box, Container, VStack, Heading, Input, Button, Textarea, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const CreateList = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [movies, setMovies] = useState([]);

  const addMovie = () => {
    setMovies([...movies, { title: "", platform: "", comment: "", rating: 1 }]);
  };

  const updateMovie = (index, field, value) => {
    const updatedMovies = [...movies];
    updatedMovies[index][field] = value;
    setMovies(updatedMovies);
  };
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/lists", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          list_title: title,
          description,
          movies,
        }),
      });
      if (response.ok) {
        toast({
          title: "List created.",
          description: "Your list has been created successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        navigate("/");
      } else {
        throw new Error("List creation failed.");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Container centerContent>
      <Box padding="4" maxWidth="md" width="full">
        <VStack spacing={8}>
          <Heading>Create a New List</Heading>
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <Input placeholder="List Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
              <Textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
              {movies.map((movie, index) => (
                <VStack key={index} align="stretch" spacing={2}>
                  <Input placeholder="Movie/Series Title" value={movie.title} onChange={(e) => updateMovie(index, "title", e.target.value)} required />
                  <Input placeholder="Platform" value={movie.platform} onChange={(e) => updateMovie(index, "platform", e.target.value)} />
                  <Input placeholder="Comment" value={movie.comment} onChange={(e) => updateMovie(index, "comment", e.target.value)} />
                  <Input type="number" min="1" max="10" placeholder="Rating (1-10)" value={movie.rating} onChange={(e) => updateMovie(index, "rating", parseInt(e.target.value))} required />
                </VStack>
              ))}
              <Button onClick={addMovie} colorScheme="teal" variant="outline">
                Add Movie/Series
              </Button>
              <Button type="submit" colorScheme="teal">
                Create List
              </Button>
            </VStack>
          </form>
        </VStack>
      </Box>
    </Container>
  );
};

export default CreateList;
