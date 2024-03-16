import React from "react";
import { Box, VStack, Button } from "@chakra-ui/react";
import { FaListAlt, FaShareAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SidebarMenu = ({ activeMenu, setActiveMenu }) => {
  const navigate = useNavigate();

  return (
    <Box>
      <VStack spacing={4} align="stretch">
        <Button
          leftIcon={<FaListAlt />}
          colorScheme={activeMenu === "my-lists" ? "teal" : "gray"}
          onClick={() => {
            setActiveMenu("my-lists");
            navigate("/");
          }}
        >
          My Lists
        </Button>
        <Button
          leftIcon={<FaShareAlt />}
          colorScheme={activeMenu === "shared" ? "teal" : "gray"}
          onClick={() => {
            setActiveMenu("shared");
            navigate("/shared-lists");
          }}
        >
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
