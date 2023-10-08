import {
  HStack,
  Box,
  Image,
  Text,
  Button,
  Spacer,
  SimpleGrid,
} from "@chakra-ui/react";
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
import { gener_id_map } from "../utils/genre";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <HStack gap={5} px={{ md: "20", sm: "5" }}>
      <Box flexShrink={0}>
        <Image w={"20"} src={logo} />
      </Box>
      <HStack color={"grey"} fontSize={"sm"} gap={2}>
        <Text _hover={{ cursor: "pointer", color: "white" }} px={3} py={1}>
          <Link to={"/"}>Home</Link>
        </Text>
        <Popover trigger="hover" placement="end-end">
          <PopoverTrigger>
            <Text px={3} py={1} _hover={{ cursor: "pointer", color: "white" }}>
              Genre
            </Text>
          </PopoverTrigger>
          <PopoverContent w={400}>
            <PopoverArrow />
            <PopoverBody p={5}>
              <SimpleGrid
                gridTemplateColumns={`repeat(auto-fill , minmax(100px , 1fr))`}
                spacing="10px"
              >
                {Object.keys(gener_id_map).map((key) => {
                  return (
                    <Box>
                      <Text fontSize={"sm"} textAlign={"justify"}>
                        <Link to={`/genre/${gener_id_map[key]}`}>{key}</Link>
                      </Text>
                    </Box>
                  );
                })}
              </SimpleGrid>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </HStack>
      <Box display={{ md: "block", base: "none" }} ml={"auto"}>
        <SearchBox />
      </Box>
    </HStack>
  );
};

export default Navbar;
