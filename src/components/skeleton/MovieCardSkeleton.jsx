import { Box, Skeleton, SkeletonText } from "@chakra-ui/react";

const MovieCardSkeleton = () => {
  return (
    <Box>
      <Skeleton height={250} />
      <SkeletonText mt={2} skeletonHeight={10} noOfLines={1} />
    </Box>
  );
};

export default MovieCardSkeleton;
