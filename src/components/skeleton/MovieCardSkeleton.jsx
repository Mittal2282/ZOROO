import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Box, Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const MovieCardSkeleton = () => {
  return (
    <Box>
      <Skeleton height={175} />
      <SkeletonText mt={2} skeletonHeight={10} noOfLines={1} />
    </Box>
  );
};

export default MovieCardSkeleton;
