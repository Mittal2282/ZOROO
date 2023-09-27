import { useQuery } from "@tanstack/react-query";
import { Box, SimpleGrid, SkeletonText, Heading } from "@chakra-ui/react";

import MovieCard from "../components/MovieCard";
import MovieListSkeleton from "../components/skeleton/MovieListSkeleton";
import { useState, useRef, useCallback } from "react";
import MovieBanner from "../components/MovieBanner";

const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [movies, setMovies] = useState([]);

  const { isLoading } = useQuery(
    ["popular", pageNumber],
    async () => {
      const delay = Math.floor(Math.random() * (4000 - 2000 + 1)) + 2000;

      const delayPromise = new Promise((resolve) => {
        setTimeout(resolve, delay);
      });

      await delayPromise;

      let response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${pageNumber}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODg0NjAxOTM1YmZmMmE9IyJhdWQiOiI3ODg0NjAxOTM1YmZmMmE5MmUwNmVjN2ZmMjc5N2IzMyIsInN1YiI6IjY4NDI1NDU3Mzc4MDkyNDA4MzEwOGFjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vxkjHIi3cqFyE-vt-MCUQBPJOTaVKa57_8iIZm-n_hU",
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

  const randomIndex = Math.floor(Math.random() * movies.length);

  return (
    <Box pb={5}>
      <MovieBanner movie={movies[randomIndex]} />
      <Box my={20} px={20}>
        <Box my={5}>
          {isLoading && pageNumber == 1 ? (
            <SkeletonText skeletonHeight={10} w={300} noOfLines={1} />
          ) : (
            <Heading size="lg">Trending</Heading>
          )}
        </Box>
        {isLoading && pageNumber == 1 && <MovieListSkeleton />}
        {
          <SimpleGrid minChildWidth="200px" spacing="20px">
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
        {isLoading && pageNumber != 1 && <MovieListSkeleton />}
      </Box>
    </Box>
  );
};

export default Home;
