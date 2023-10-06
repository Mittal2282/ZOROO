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
            if(item.poster_path===null){
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

