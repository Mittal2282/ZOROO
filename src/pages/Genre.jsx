import React from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { Box, SkeletonText, SimpleGrid, Text } from "@chakra-ui/react";
import { useState, useRef, useCallback } from "react";
import MovieListSkeleton from "../components/skeleton/MovieListSkeleton";
import MovieCard from "../components/MovieCard";
import { id_gener_map } from "../utils/genre";

const Genre = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [movies, setMovies] = useState([]);
  const param = useParams();
  let genreId = param.genreId;
  const { isLoading, isError, data } = useQuery(
    ["genre", genreId, pageNumber],
    async () => {
      let response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pageNumber}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODg0NjAxOTM1YmZmMmE5MmUwNmVjN2ZmMjc5N2IzMyIsInN1YiI6IjY0OTIyNjBiZWRhNGI3MDBlYzRiNGE4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vxkjHIi3cqFyE-vt-MCUQBPJOTaVKa57_8iIZm-n_hU",
          },
          params: {
            with_genres: [genreId],
            page: pageNumber,
          },
        }
      );

      let data = await response.json();

      return data.results;
    },
    {
      onSuccess: (newData) => {
        setMovies((prevData) => [...prevData, ...newData]);
      },
    }
  );

  const observer = useRef();
  const lastMovieItemRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && pageNumber < 500) {
          setPageNumber(pageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, pageNumber]
  );

  if (isError) {
    return <Box>Error</Box>;
  }

  return (
    <Box>
      <Box mx={10}>
        <Box mt={5} mb={5}>
          {isLoading && pageNumber == 1 ? (
            <SkeletonText skeletonHeight={10} w={150} noOfLines={1} />
          ) : (
            <Text fontWeight={"bold"} fontSize={"xl"}>
              {id_gener_map[genreId]}
            </Text>
          )}
        </Box>
        {((isLoading && pageNumber == 1) || movies.length === 0) && (
          <MovieListSkeleton numBoxes={20} height={250} minimumWidth="150px" />
        )}
        {
          <SimpleGrid minChildWidth="150px" spacing="20px">
            {movies.map((movie, index) => {
              return (
                <Box
                  key={index}
                  ref={index + 1 == movies.length ? lastMovieItemRef : null}
                >
                  <MovieCard movieData={movie} />
                </Box>
              );
            })}
          </SimpleGrid>
        }
        {isLoading && pageNumber != 1 && (
          <MovieListSkeleton numBoxes={20} height={250} minimumWidth="150px" />
        )}
      </Box>
    </Box>
  );
};

export default Genre;
