import React from "react";
import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
const SearchBox = () => {
  return (
    <Box>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <AiOutlineSearch stroke="gray" />
        </InputLeftElement>

        <Input
          fontSize={"sm"}
          placeholder="Enter Keywords"
          width={"300px"}
          bg={"rgba(255 , 255, 255, 0.2)"}
          borderRadius={"200"}
        />
      </InputGroup>
    </Box>
  );
};

export default SearchBox;
