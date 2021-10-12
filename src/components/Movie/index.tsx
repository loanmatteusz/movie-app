import React from 'react';
import { Image, Box } from "@chakra-ui/react"

const IMG_API = "https://image.tmdb.org/t/p/w1280";


type Props = {
  title: string;
  poster_path: string;
  overview: string;
  vote_average: number;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function Movie({
  title,
  poster_path,
  // overview,
  // vote_average
}: Props) {
  return (
    <Box
      cursor="pointer"
      borderRadius="10px"
      w="100%"
      h={["140px", "180px", "200px", "240px", "320px"]}
      bg="#2a2a37"
    >
      <Image
        borderRadius="10px"
        h="100%"
        w="100%"
        src={
          poster_path
            ? (IMG_API + poster_path)
            : "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1728&q=80"
        }
        alt={title}
      />
    </Box>
  );
}

export default Movie;
