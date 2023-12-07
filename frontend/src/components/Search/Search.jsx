import './index.css';

const Search = props => {
  return (
    <input className='search' type="search" placeholder={props.placeholder} onChange={props.onChange} />
  );
};

export default Search;