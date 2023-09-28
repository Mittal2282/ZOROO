import { HStack, Box, Image, Text, Button, Spacer } from "@chakra-ui/react";
import React from "react";
import logo from "../../public/logo.png";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
} from "@chakra-ui/react";
import SearchBox from "./SearchBox";

const Navbar = () => {
  return (
    <HStack gap={5} px={"20"}>
      <Box>
        <Image w={"20"} src={logo} />
      </Box>
      <HStack color={"grey"} fontSize={"sm"} gap={2}>
        <Text _hover={{ cursor: "pointer", color: "white" }} px={3} py={1}>
          Home
        </Text>
        <Popover trigger="hover">
          <PopoverTrigger>
            <Text px={3} py={1} _hover={{ cursor: "pointer", color: "white" }}>
              Genre
            </Text>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverBody>
              Are you sure you want to have that milkshake?
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </HStack>
      <Box ml={"auto"}>
        <SearchBox />
      </Box>
    </HStack>
  );
};

export default Navbar;
