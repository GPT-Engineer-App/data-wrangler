import React, { useState, useEffect } from "react";
import { VStack, Heading, Text } from "@chakra-ui/react";

const UserCreatedLists = ({ userId }) => {
  const [userLists, setUserLists] = useState([]);

  useEffect(() => {
    const fetchUserLists = async () => {
      try {
        const response = await fetch(`https://backengine-fgj4.fly.dev/user/${userId}/lists`);
        if (response.ok) {
          const data = await response.json();
          setUserLists(data);
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
      <Heading size="md">My Created Lists</Heading>
      {userLists.length === 0 ? <Text>No lists created yet.</Text> : userLists.map((list) => <Text key={list.id}>{list.list_title}</Text>)}
    </VStack>
  );
};

export default UserCreatedLists;
