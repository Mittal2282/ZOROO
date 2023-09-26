import React from "react";
import { Box } from "@chakra-ui/react";
import { Skeleton } from "@chakra-ui/react";

const MovieBannerSkeleton = () => {
  return (
    <Box h="450px" w="full">
      <Skeleton h={"full"} />
    </Box>
  );
};

export default MovieBannerSkeleton;
