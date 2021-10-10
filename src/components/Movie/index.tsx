import React from 'react';
import { Image, Box, HStack, Text, Badge } from "@chakra-ui/react"
// import './styles.css';

const IMG_API = "https://image.tmdb.org/t/p/w1280";

function setVoteClass(vote: number) {
  if (vote >= 8) {
    return "green";
  }
  else if (vote >= 6) {
    return "purple";
  }
  else {
    return "red";
  }
}

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
  vote_average
}: Props) {
  return (
    <Box
      margin="1rem"
      bg="#2f3257"
      h={[
        "220px",
        "260px",
        "280px",
        "460px",
        "460px"
      ]}
      w={[
        "28%",
        "28%",
        "26%",
        "26%",
        "22%",
        "17%",
        "17%"
      ]}
      color="white"
      cursor="pointer"
      borderRadius="3px"
    >
      <Image
        borderTopRadius="3px"
        h={[
          "160px",
          "180px",
          "220px",
          "380px"
        ]}
        w="100%"
        src={
          poster_path
            ? (IMG_API + poster_path)
            : "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1728&q=80"
        }
        alt={title}
      />

      <HStack
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        padding="1rem"
      >
        <Text
          fontSize={["8px", "10px", "12px", "md"]}
        >
          {title}
        </Text>
        <Badge
          variant="solid"
          colorScheme={`${setVoteClass(vote_average)}`}
        >
          {vote_average}
        </Badge>
      </HStack>

      {/* <Container>
        <h2>Overview:</h2>
        <p>{overview}</p>
      </Container> */}

    </Box>
  );
}

export default Movie;
