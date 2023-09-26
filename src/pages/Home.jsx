import { useQuery } from "@tanstack/react-query";
import { Box, SimpleGrid, Heading } from "@chakra-ui/react";

import MovieCard from "../components/MovieCard";
import MovieListSkeleton from "../components/skeleton/MovieListSkeleton";
import { useState, useRef, useCallback } from "react";

const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [movies, setMovies] = useState([]);

  const { isLoading, data, error } = useQuery(
    ["popular", pageNumber],
    async () => {
      let response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${pageNumber}`,
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

  return (
    <Box mt="200">
      <Heading size="md">Trending</Heading>
      {isLoading && pageNumber == 1 && <MovieListSkeleton />}
      {
        <SimpleGrid minChildWidth="150px" spacing="15px">
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
      {isLoading && <MovieListSkeleton />}
    </Box>
  );
};

export default Home;
