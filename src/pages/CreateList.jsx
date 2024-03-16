import React, { useState } from "react";
import { Box, Container, VStack, Heading, Input, Button, Textarea, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const CreateList = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [movieSeriesIds, setMovieSeriesIds] = useState("");
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
          movie_series_ids: movieSeriesIds,
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
              <Input placeholder="Movie/Series IDs (comma-separated)" value={movieSeriesIds} onChange={(e) => setMovieSeriesIds(e.target.value)} />
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
