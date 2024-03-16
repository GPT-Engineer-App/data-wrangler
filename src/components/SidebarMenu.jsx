import React from "react";
import { Box, VStack, Button } from "@chakra-ui/react";
import { FaListAlt, FaShareAlt } from "react-icons/fa";

const SidebarMenu = ({ onMenuClick }) => {
  return (
    <Box>
      <VStack spacing={4} align="stretch">
        <Button leftIcon={<FaListAlt />} colorScheme="teal" onClick={() => onMenuClick("my-lists")}>
          My Lists
        </Button>
        <Button leftIcon={<FaShareAlt />} colorScheme="blue" onClick={() => onMenuClick("shared")}>
          Shared with Me
        </Button>
        <Button leftIcon={<FaListAlt />} colorScheme="green" onClick={() => onMenuClick("create")}>
          Create New List
        </Button>
      </VStack>
    </Box>
  );
};

export default SidebarMenu;