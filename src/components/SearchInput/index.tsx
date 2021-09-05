import { useState } from 'react';
import useDebounce from '../../util/useDebounce';
import './styles.css';

type Props = {
  value: string;
  onChange: Function;
}

function SearchInput({ value, onChange }: Props) {
  const [displayValue, setDisplayValue] = useState(value);
  const debounceChange = useDebounce(onChange, 1000);

  function handleChange(event: any) {
    setDisplayValue(event.target.value);
    debounceChange(event.target.value);
  }

  return (
    <input className="search"
      type="search"
      placeholder="Search a movie, serie or person..."
      value={displayValue}
      onChange={handleChange}
    />
  );
}

export default SearchInput;