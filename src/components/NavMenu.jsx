import React from "react";
import { Box, VStack, Button } from "@chakra-ui/react";
import { FaListAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NavMenu = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <VStack spacing={4}>
        <Button leftIcon={<FaListAlt />} colorScheme="green" onClick={() => navigate("/create-list")}>
          Create New List
        </Button>
      </VStack>
    </Box>
  );
};

export default NavMenu;
