import React, { useState, useEffect } from "react";
import { VStack, Heading, Text } from "@chakra-ui/react";

const SharedLists = ({ userId }) => {
  const [sharedLists, setSharedLists] = useState([]);

  useEffect(() => {
    const fetchSharedLists = async () => {
      try {
        const response = await fetch(`/user/${userId}/shared-lists`);
        if (response.ok) {
          const data = await response.json();
          setSharedLists(data);
        } else {
          throw new Error("Failed to fetch shared lists.");
        }
      } catch (error) {
        console.error("Error fetching shared lists:", error);
      }
    };

    fetchSharedLists();
  }, [userId]);

  return (
    <VStack spacing={4} align="stretch">
      <Heading size="md">Shared with Me</Heading>
      {sharedLists.length === 0 ? (
        <Text>No lists have been shared with you yet.</Text>
      ) : (
        sharedLists.map((list) => (
          <Text key={list.id}>
            {list.list_title} (Created by User ID: {list.user_id})
          </Text>
        ))
      )}
    </VStack>
  );
};

export default SharedLists;
