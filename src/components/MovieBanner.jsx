import { Box, VStack, Text, Heading, Tooltip, Button } from "@chakra-ui/react";
import MovieBannerSkeleton from "./skeleton/MovieBannerSkeleton";
import truncate from "../utils/turnicate";
import Navbar from "./Navbar";
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
      <Box top={2} width={"full"} pos={"absolute"} zIndex={100}>
        <Navbar />
      </Box>

      <VStack
        transform={"translateY(-50%)"}
        alignItems={"flex-start"}
        w={"500px"}
        zIndex={10}
        pos="absolute"
        top="50%"
        left="20"
      >
        <Heading fontWeight={"bold"} size={"xl"}>
          {movie.original_title}
        </Heading>
        <Tooltip>
          <Text fontSize={"sm"} color="grey">
            {truncate(movie.overview, 170)}
          </Text>
        </Tooltip>
        <Button mt={"5"} fontSize={"sm"} fontWeight={"sm"}>
          Watch Now
        </Button>
      </VStack>
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
        width={"50%"}
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

// adult
// :
// false
// backdrop_path
// :
// "/H6j5smdpRqP9a8UnhWp6zfl0SC.jpg"
// genre_ids
// :
// (3) [28, 878, 12]
// id
// :
// 565770
// original_language
// :
// "en"
// original_title
// :
// "Blue Beetle"
// overview
// :
// "Recent college grad Jaime Reyes returns home full of aspirations for his future, only to find that home is not quite as he left it. As he searches to find his purpose in the world, fate intervenes when Jaime unexpectedly finds himself in possession of an ancient relic of alien biotechnology: the Scarab."
// popularity
// :
// 3180.6
// poster_path
// :
// "/mXLOHHc1Zeuwsl4xYKjKh2280oL.jpg"
// release_date
// :
// "2023-08-16"
// title
// :
// "Blue Beetle"
// video
// :
// false
// vote_average
// :
// 7.2
// vote_count
// :
// 910
