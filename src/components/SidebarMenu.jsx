import React from "react";
import { Box, VStack, Button } from "@chakra-ui/react";
import { FaListAlt, FaShareAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SidebarMenu = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <VStack spacing={4} align="stretch">
        <Button leftIcon={<FaListAlt />} colorScheme="teal" onClick={() => navigate("/my-lists")}>
          My Lists
        </Button>
        <Button leftIcon={<FaShareAlt />} colorScheme="blue" onClick={() => navigate("/shared-lists")}>
          Shared with Me
        </Button>
        <Button leftIcon={<FaListAlt />} colorScheme="green" onClick={() => navigate("/create-list")}>
          Create New List
        </Button>
      </VStack>
    </Box>
  );
};

export default SidebarMenu;