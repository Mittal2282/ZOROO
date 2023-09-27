import { Box } from "@chakra-ui/react";
import MovieBannerSkeleton from "./skeleton/MovieBannerSkeleton";

function MovieBanner({ movie }) {
  if (movie === undefined) {
    return <MovieBannerSkeleton />;
  }
  return (
    <Box
      backgroundPosition="center"
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
      backgroundImage={`url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`}
      h="80vh"
      w="full"
      pos={"relative"}
    >
      <Box
        background="linear-gradient(180deg,rgba(17,17,17,0 ) 0, rgba(26, 32, 44,1)  100%)"
        pos={"absolute"}
        width={"full"}
        height={"100% "}
        bottom={0}
        left={0}
        zIndex={1}
      />
      <Box
        background="linear-gradient(180deg, rgba(26, 32, 44, 1) 0, rgba(17, 17, 17, 0) 100%)"
        pos={"absolute"}
        width={"full"}
        height={"20% "}
        top={0}
        left={0}
        zIndex={1}
      />
      <Box
        background="linear-gradient(90deg, rgba(26, 32, 44, 1) 0, rgba(17, 17, 17, 0) 100%)"
        pos={"absolute"}
        width={"20%"}
        height={"full"}
        top={0}
        left={0}
        zIndex={1}
      />
      <Box
        background="linear-gradient(270deg, rgba(26, 32, 44, 1) 0, rgba(17, 17, 17, 0) 100%)"
        pos={"absolute"}
        width={"20%"}
        height={"full"}
        top={0}
        right={0}
        zIndex={1}
      />
    </Box>
  );
}

export default MovieBanner;
