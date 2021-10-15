import React, { useState } from 'react';
import { Box, Text, Divider, Container, Button } from '@chakra-ui/react';

const ReadMore: React.FC = () => {

  const [textCompact, setTextCompact] = useState({
    textCompacted: "",
    textExpanded: "none",
  });

  const handleTextCompact = () => {
    console.log(textCompact);
    return textCompact.textCompacted === ""
      ? setTextCompact({ textCompacted: "none", textExpanded: "" })
      : setTextCompact({ textCompacted: "", textExpanded: "none" })
  }

  return (
    <Box w="100%" m="0 auto">
      <Text fontSize={["lg", "xl", "2xl", "3xl"]}>Assistir a filmes online</Text>
      <Divider mb=".5rem" borderColor="orange" />
      <Text display={textCompact.textCompacted} fontSize={["base", "sm", "md", "lg"]} variant="compacted">
        Encontre seu próximo filme para assistir online e veja em quais plataformas ele está disponível.
        <br />
        <br />
        Sabemos do seu desafio em encontrar um filme online dublado ou legendado entre as mais diversas plataformas de streaming, como Netflix, YouTube, Amazon Prime Video, NOW, Apple TV e outras.
        <Container m="0 auto" textAlign="center">
          <Button onClick={() => handleTextCompact()} variant="unstyled">...</Button>
        </Container>
      </Text>
      <Text display={textCompact.textExpanded} fontSize={["base", "sm", "md", "lg"]}>
        Encontre seu próximo filme para assistir online e veja em quais plataformas ele está disponível.
        <br />
        <br />
        Sabemos do seu desafio em encontrar um filme online dublado ou legendado entre as mais diversas plataformas de streaming, como Netflix, YouTube, Amazon Prime Video, NOW, Apple TV e outras.
        <br />
        <br />
        No Filmelier nossa missão é te ajudar a encontrar os melhores filmes em alta qualidade (HD) para você assistir online, no conforto da sua casa e em qual serviço de streaming preferir.
        <br />
        <br />
        São diversos lançamentos e filmes antigos de gêneros como drama, terror, ação, comédia, suspense e muito mais.
        <br />
        <br />
        Continue navegando e descubra seu próximo filme para ver online hoje.
      </Text>
    </Box>
  );
}

export default ReadMore;