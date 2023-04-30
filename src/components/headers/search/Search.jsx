import { ProductsContext } from '../../../context/productsContext';
import { useContext } from 'react';
import './index.css';

export const Search = () => {
  const { setSearch } = useContext(ProductsContext);
  return (
    <input
      placeholder='search..'
      onChange={(e) => setSearch(e.target.value)}
      className='search__input'
    />
  );
};
