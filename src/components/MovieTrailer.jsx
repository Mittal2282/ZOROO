import React from "react";
import MovieTrailerSkeleton from "./skeleton/MovieTrailerSkeleton";
import { useQuery } from "@tanstack/react-query";
import { Box } from "@chakra-ui/react";

const MovieTrailer = ({ movieId }) => {
  const { isLoading, isError, data } = useQuery(
    ["movieTrailer", movieId],
    async () => {
      let response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
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
      <Box height={"full"} width={"full"}>
        <MovieTrailerSkeleton />
      </Box>
    );
  }

  let trailerArr = data.filter((item) => {
    if (item.type === "Trailer") {
      return true;
    }
    return false;
  });

  trailerArr = trailerArr[0];
  return (
    <Box height={"full"} width={"full"}>
      {
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${trailerArr.key}?si=dQ79_x1lOYYduyAs`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      }
    </Box>
  );
};

export default MovieTrailer;
