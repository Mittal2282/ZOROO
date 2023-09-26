import React from "react";
import { Box } from "@chakra-ui/react";
import { Image, Text } from "@chakra-ui/react";
import { HStack, VStack } from "@chakra-ui/react";
import { Tooltip } from "@chakra-ui/react";
import turnicate from "../utils/turnicate";
const MovieCard = ({ movieData }) => {
  return (
    <Box>
      <Image
        h={185}
        w="full"
        objectFit="cover"
        src={`https://image.tmdb.org/t/p/w185${movieData.poster_path}`}
      />
      <VStack alignItems="flex-start" gap={0}>
        <Text as="b" fontSize="sm">
          <Tooltip label={movieData.original_title}>
            {turnicate(movieData.original_title, 15)}
          </Tooltip>
        </Text>
        <HStack fontSize="xs" w={"full"} justifyContent={"space-between"}>
          <Text>{movieData.release_date}</Text>
          <Text>{movieData.vote_average}</Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default MovieCard;

// turnicate , tooltip
