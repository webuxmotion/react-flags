import { IoSearch } from 'react-icons/io5';
import { useSearch } from './use-search';
import { Input, InputContainer } from './Search.styles';

export const Search = () => {
  const [search, handleSearch] = useSearch();

  return (
    <InputContainer>
      <IoSearch />
      <Input onChange={handleSearch} value={search}/>
    </InputContainer>
  );
};
