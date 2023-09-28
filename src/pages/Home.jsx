import { useQuery } from "@tanstack/react-query";
import { Box, Text, SimpleGrid, SkeletonText, Heading } from "@chakra-ui/react";

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
    <Box pb={5}>
      <MovieBanner movie={movies[0]} />
      <Box px={20}>
        <Box py={20}>
          <Text color={"grey"} fontSize={"sm"}>
            Are you looking for the best movie site to make the most of your
            entertainment time? Don’t subscribe to paid streaming services yet
            as you can get the same quality content and features at fmovies for
            free. We provide you with thousands of movies and TV shows in HD
            quality without any hassle. You do not need to pay, subscribe,
            register, or even watch shady ads to enjoy your favorite movies here
            safely and smoothly. Expect the most seamless streaming experience
            at Fmovies thanks to the fast loading speed and excellent streaming
            features. New content is updated on a daily basis, including the
            latest releases. Bookmark Fmovies and check us frequently in order
            not to miss out on any interesting movies and TV shows.
          </Text>
        </Box>
        <Box>
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
    </Box>
  );
};

export default Home;
