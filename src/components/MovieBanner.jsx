import React from "react";
import { Box, Text } from "@chakra-ui/react";
import MovieBannerSkeleton from "./skeleton/MovieBannerSkeleton";

function MovieBanner({ movie }) {
  if (movie === undefined) {
    return <MovieBannerSkeleton />;
  }
  return (
    <Box
      backdropFilter="auto"
      backdropBlur="6px"
      backgroundPosition="center"
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
      backgroundImage={`url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`}
      h="450px"
      w="full"
    >
      <Text></Text>
    </Box>
  );
}

export default MovieBanner;
