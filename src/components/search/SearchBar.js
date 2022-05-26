import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

import './SearchBar.css';

const SearchBar = (props) => {
  const {
    inputData, getData, searchComp, clearInput, exchange,
  } = props;

  const exchangeName = exchange.toUpperCase();
  return (
    <div className="top">
      <h2 className="title">
        Seacrh Company Name Lists of
        {' '}
        {exchangeName}
        {' '}
        Exchange to watch Price Quotes.
      </h2>
      <div className="search">
        <input
          type="text"
          className="searchArea"
          placeholder="Search..."
          value={inputData}
          onChange={getData}
        />
        <div className="searchIcon">
          {searchComp === ''
            ? <FaSearch />
            : (
              <AiOutlineClose
                id="clearBtn"
                onClick={clearInput}
              />
            )}
        </div>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  inputData: PropTypes.string.isRequired,
  getData: PropTypes.func.isRequired,
  searchComp: PropTypes.string.isRequired,
  clearInput: PropTypes.func.isRequired,
  exchange: PropTypes.string.isRequired,
};

export default SearchBar;
