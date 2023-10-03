import React from "react";
import {
  Box,
  HStack,
  VStack,
  Image,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import {
  AiFillStar,
  AiFillLike,
  AiFillDislike,
  AiOutlineFieldTime,
} from "react-icons/ai";

import { BiSolidTimeFive } from "react-icons/bi";
import MovieTabs from "./MovieTabs";

const MovieDetail = ({ movie }) => {
  return (
    <HStack gap={5} alignItems={"flex-start"}>
      <Box w={"30%"} h={"400px"}>
        <Image
          w={"full"}
          borderRadius={"md"}
          objectFit="cover"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
      </Box>
      <VStack alignItems={"flex-start"} flexGrow={1} w={"60%"}>
        <Heading size={"lg"}>{movie.original_title}</Heading>
        <HStack gap={5} w={"full"}>
          <HStack gap={1}>
            <AiFillStar />
            <Box fontSize={"sm"}>{movie.vote_average}</Box>
          </HStack>

          <HStack gap={1}>
            <BiSolidTimeFive />
            <Box fontSize={"sm"}>{movie.runtime} min</Box>
          </HStack>
          <HStack ml={"auto"}>
            <Button leftIcon={<AiFillLike />} size={"sm"}>
              Like
            </Button>
            <Button leftIcon={<AiFillDislike />} size={"sm"}>
              Dislike
            </Button>
          </HStack>
        </HStack>
        <Text color={"grey"} mt={5} fontSize={"sm"}>
          {movie.overview}
        </Text>
        <Box w={"full"}>
          <MovieTabs movie={movie}/>
        </Box>
      </VStack>
    </HStack>
  );
};

export default MovieDetail;

// adult
// :
// false
// backdrop_path
// :
// "/iiXliCeykkzmJ0Eg9RYJ7F2CWSz.jpg"
// belongs_to_collection
// :
// null
// budget
// :
// 20000000
// genres
// :
// (4) [{…}, {…}, {…}, {…}]
// homepage
// :
// "https://iiil.io/jCT7"
// id
// :
// 762430
// imdb_id
// :
// "tt6906292"
// original_language
// :
// "en"
// original_title
// :
// "Retribution"
// overview
// :
// "When a mysterious caller puts a bomb under his car seat, Matt Turner begins a high-speed chase across the city to complete a specific series of tasks. With his kids trapped in the back seat and a bomb that will explode if they get out of the car, a normal commute becomes a twisted game of life or death as Matt follows the stranger's increasingly dangerous instructions in a race against time to save his family."
// popularity
// :
// 1547.22
// poster_path
// :
// "/oUmmY7QWWn7OhKlcPOnirHJpP1F.jpg"
// production_companies
// :
// (3) [{…}, {…}, {…}]
// production_countries
// :
// (2) [{…}, {…}]
// release_date
// :
// "2023-08-23"
// revenue
// :
// 12905464
// runtime
// :
// 91
// spoken_languages
// :
// (2) [{…}, {…}]
// status
// :
// "Released"
// tagline
// :
// "All roads lead to the truth."
// title
// :
// "Retribution"
// video
// :
// false
// vote_average
// :
// 6.845
// vote_count
// :
// 255
// [[Prototype]]
// :
// Object
