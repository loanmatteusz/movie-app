import React, { useState } from 'react';
import { Input } from '@chakra-ui/input';
import useDebounce from '../../util/useDebounce';

type Props = {
  value: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  onChange: Function;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function SearchInput({ value, onChange }: Props) {
  const [displayValue, setDisplayValue] = useState(value);
  const debounceChange = useDebounce(onChange, 1000);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleChange(event: any) {
    setDisplayValue(event.target.value);
    debounceChange(event.target.value);
  }

  return (
    <Input
      backgroundColor="transparent"
      border="2px solid #3a3c65"
      borderRadius="25px"
      fontFamily="'Courier New', Courier, monospace"
      fontSize="1.2rem"
      color="white"
      padding=".5rem 1.5rem"
      m="2%"
      w={["100%", "100%", "75%", "60%", "50%"]}
      outline="none"

      type="search"
      placeholder="Pesquise por um filme"
      value={displayValue}
      onChange={handleChange}
    />
  );
}

export default SearchInput;
