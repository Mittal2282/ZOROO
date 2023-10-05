import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router";
import { Box, HStack, Skeleton, SkeletonText, VStack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import MovieDetailSkeleton from "../components/skeleton/MovieDetailSkeleton";
import MovieDetail from "../components/MovieDetail";
import Navbar from "../components/Navbar";
import MovieDetailBanner from "../components/MovieDetailBanner";
import SimilarMovies from "../components/SimilarMovies";

function Movie() {
  const param = useParams();
  let movieId = param.movieId;

  const { isLoading, isError, data } = useQuery(
    ["movie", movieId],
    async () => {
      let response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}`,
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

      return data;
    }
  );

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (isError) {
    return <Box>Error</Box>;
  }
  return (
    <VStack mb={"15rem"}>
      {isLoading && (
        <>
          <Box width={"full"} height={"50vh"}>
            <Skeleton width={"full"} height={"full"} />
          </Box>
          <HStack pt={10} px={20} alignItems={"flex-start"} gap={10} w={"full"}>
            <Box flexGrow={1}>
              <MovieDetailSkeleton />
            </Box>
          </HStack>
        </>
      )}
      {!isLoading && (
        <VStack>
          <Box mt={2} w="full">
            <Navbar />
          </Box>
          <MovieDetailBanner backdrop={data.backdrop_path} />
          <HStack
            my={"-25vh"}
            pt={10}
            px={20}
            alignItems={"flex-start"}
            gap={10}
            w={"full"}
          >
            <VStack>
              <Box flexGrow={1}>
                {!isLoading && <MovieDetail movie={data} />}
              </Box>
            </VStack>

            <Box flexShrink={0} gap={2} w={"30%"}>
              <SimilarMovies movieId={movieId} />
            </Box>
          </HStack>
        </VStack>
      )}
    </VStack>
  );
}

export default Movie;

// Object
// adult
// :
// false
// backdrop_path
// :
// "/c6Splshb8lb2Q9OvUfhpqXl7uP0.jpg"
// belongs_to_collection
// :
// null
// budget
// :
// 0
// genres
// :
// (2) [{…}, {…}]
// homepage
// :
// "https://www.openroadfilms.com/movies/kandahar"
// id
// :
// 717930
// imdb_id
// :
// "tt5761544"
// original_language
// :
// "en"
// original_title
// :
// "Kandahar"
// overview
// :
// "After his mission is exposed, an undercover CIA operative stuck deep in hostile territory in Afghanistan must fight his way out, alongside his Afghan translator, to an extraction point in Kandahar, all whilst avoiding elite enemy forces and foreign spies tasked with hunting them down."
// popularity
// :
// 691.37
// poster_path
// :
// "/lCanGgsqF4xD2WA5NF8PWeT3IXd.jpg"
// production_companies
// :
// (4) [{…}, {…}, {…}, {…}]
// production_countries
// :
// (2) [{…}, {…}]
// release_date
// :
// "2023-05-25"
// revenue
// :
// 3000000
// runtime
// :
// 119
// spoken_languages
// :
// [{…}]
// status
// :
// "Released"
// tagline
// :
// "The only thing more dangerous than the mission is the escape."
// title
// :
// "Kandahar"
// video
// :
// false
// vote_average
// :
// 6.892
// vote_count
// :
// 590
// [[Prototype]]
// :
// Object
