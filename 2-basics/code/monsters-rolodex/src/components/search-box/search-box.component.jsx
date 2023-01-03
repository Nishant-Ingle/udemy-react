import './search-box.styles.css';

const SearchBox = ({ myClassName, myPlaceholder, myOnChangeHandler }) => (
  <input
    className={`search-box ${myClassName}`}
    type='search'
    placeholder={ myPlaceholder }
    onChange={ myOnChangeHandler }
  />
);


export default SearchBox;