import React from "react";
import { Box, Heading, SimpleGrid, SkeletonText } from "@chakra-ui/react";
import MovieListSkeleton from "./skeleton/MovieListSkeleton";

import { useQuery } from "@tanstack/react-query";
import MovieCard from "./MovieCard";

const SimilarMovies = ({ movieId }) => {
  const { isLoading, isError, data } = useQuery(
    ["movieSimilar", movieId],
    async () => {
      let response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/similar`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODg0NjAxOTM1YmZmMmE5MmUwNmVjN2ZmMjc5N2IzMyIsInN1YiI6IjY0OTIyNjBiZWRhNGI3MDBlYzRiNGE4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vxkjHIi3cqFyE-vt-MCUQBPJOTaVKa57_8iIZm-n_hU",
          },
        }
      );
      let data = await response.json();

      return data.results;
    }
  );

  if (isLoading) {
    return (
      <Box gap={2} w={"full"}>
        <SkeletonText mb={5} skeletonHeight={10} w={200} noOfLines={1} />
        <MovieListSkeleton numBoxes={9} height="175px" minimumWidth={"100px"} />
      </Box>
    );
  }

  return (
    <Box gap={2} w={"full"}>
      <Heading mb={5} size={"lg"}>
        Similar Movies
      </Heading>
      <SimpleGrid gap={5} minChildWidth={"120px"}>
        {data.map((item,index) => {
            if(index>=9){
                return null
            }
          return (
            <Box>
              <MovieCard h={"175px"} movieData={item} />
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default SimilarMovies;

// adult
// :
// false
// backdrop_path
// :
// "/4JNiBoqx110teUp0ZKLEDQeeSuk.jpg"
// genre_ids
// :
// (2) [18, 53]
// id
// :
// 924572
// original_language
// :
// "en"
// original_title
// :
// "Mr. Dorothy"
// overview
// :
// "A fairytale revenge story by Gabriel Bisset-Smith."
// popularity
// :
// 0.626
// poster_path
// :
// "/lifpThGDBsRAvDAoDq9xVE41RTC.jpg"
// release_date
// :
// "2009-12-02"
// title
// :
// "Mr. Dorothy"
// video
// :
// false
// vote_average
// :
// 4
// vote_count
// :
// 1
