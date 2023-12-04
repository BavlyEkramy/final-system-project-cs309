import './index.css';

const Search = props => {
  return (
    <input className='search' type="search" onChange={props.onChange} />
  );
};

export default Search;