import { Box, SimpleGrid, HStack } from "@chakra-ui/react";
import React from "react";
import MovieCardSkeleton from "./MovieCardSkeleton";

const MovieListSkeleton = () => {
  const emptyArrary = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <SimpleGrid mt={2} minChildWidth="200px" spacing="20px">
      {emptyArrary.map(() => {
        return <MovieCardSkeleton />;
      })}
    </SimpleGrid>
  );
};

export default MovieListSkeleton;
