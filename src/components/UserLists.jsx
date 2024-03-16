import React, { useState, useEffect } from "react";
import { VStack, Heading, Text } from "@chakra-ui/react";

const UserLists = ({ userId }) => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const fetchUserLists = async () => {
      try {
        const response = await fetch(`/user/${userId}/lists`);
        if (response.ok) {
          const data = await response.json();
          setLists(data);
        } else {
          throw new Error("Failed to fetch user lists.");
        }
      } catch (error) {
        console.error("Error fetching user lists:", error);
      }
    };

    fetchUserLists();
  }, [userId]);

  return (
    <VStack spacing={4} align="stretch">
      <Heading size="md">My Lists</Heading>
      {lists.length === 0 ? (
        <Text>You have no lists yet.</Text>
      ) : (
        lists.map((list) => (
          <Text key={list.id}>{list.list_title}</Text>
        ))
      )}
    </VStack>
  );
};

export default UserLists;