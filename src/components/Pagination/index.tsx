import { Container, HStack, Link, ListItem, UnorderedList } from '@chakra-ui/layout';
import React from 'react';
// import './styles.css';

const MAX_ITEMS = 5;
const MAX_SIDE = (MAX_ITEMS - 1) / 2;

type Props = {
  search: string,
  pages: number;
  currentPage: number;
  // eslint-disable-next-line @typescript-eslint/ban-types
  fetch: Function;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function Pagination({
  search,
  pages,
  currentPage,
  fetch
}: Props) {
  const firstPage = Math.max(currentPage - MAX_SIDE, 1);

  return (
    <HStack>
      <Container>
        <UnorderedList
          display="flex"
          listStyleType="none"
        >
          {currentPage > 1 ?
            <ListItem
              margin="5px"
              key={1}
              onClick={() => fetch(search, currentPage - 1)}
            >
              <Link href="/#"
                color="white"
                textDecoration="none"
                padding="0.2rem"
              >
                Prev
              </Link>
            </ListItem> :
            <ListItem
              margin="5px"
              key={2}
            >
              <Link href="/#"
                color="grey"
                textDecoration="none"
                padding="0.2rem"
              >
                Prev
              </Link>
            </ListItem>
          }
          {
            Array.from({ length: MAX_ITEMS })
              .map((_, index) => index + firstPage)
              .map(page => (
                <ListItem
                  margin="5px"
                  key={page}
                  bgColor={
                    page === currentPage ? `#7c3889` : ''
                  }
                  borderRadius={
                    page === currentPage ? `3px` : ''
                  }
                  onClick={() => fetch(search, page)}
                >
                  <Link href="/#"
                    color="white"
                    textDecoration="none"
                    padding="0.2rem"
                  >
                    {page}
                  </Link>
                </ListItem>
              ))
          }
          {currentPage < pages ?
            <ListItem
              margin="5px"
              onClick={() => fetch(search, currentPage + 1)}
            >
              <Link href="/#"
                color="white"
                textDecoration="none"
                padding="0.2rem"
              >
                Next
              </Link>
            </ListItem> :
            <ListItem
              margin="5px"
            >
              <Link href="/#"
                color="grey"
                textDecoration="none"
                padding="0.2rem"
              >
                Next
              </Link>
            </ListItem>
          }
        </UnorderedList>
      </Container>
    </HStack>
  );
}

export default Pagination;
