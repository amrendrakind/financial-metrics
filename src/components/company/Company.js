import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { BiChevronLeft } from 'react-icons/bi';
import CompanyItem from './CompanyItem';
import './Company.css';
import SearchBar from '../search/SearchBar';

function Company() {
  const company = useSelector((state) => state.Company);

  const { id } = useParams();
  const exchange = id;
  const [searchCompany, setSearchCompany] = useState('');
  const [inputData, setInputData] = useState('');

  const getData = (e) => {
    const data = e.target.value;
    setSearchCompany(data);
    setInputData(data);
  };

  const clearInput = () => {
    setSearchCompany('');
    setInputData('');
  };

  return (
    <div className="container">
      <SearchBar
        inputData={inputData}
        getData={getData}
        searchComp={searchCompany}
        clearInput={clearInput}
        exchange={exchange}
      />
      <div className="back-header">
        <Link to="/financial-metrics">
          <BiChevronLeft className="backBtn" />
        </Link>
        <h2 className="comapny-head-info">Click a company name to watch the stock price quotes!!</h2>
      </div>

      { company.length === 0
        ? (
          <h2 className="loading">Loading comapny list...</h2>
        )
        : (
          <ul className="company-list-conatiner">
            {company.filter((value) => {
              let result = '';
              if (searchCompany === '') {
                result = value;
              } if (value.name.toLowerCase().includes(searchCompany.toLowerCase())) {
                result = value;
              }
              return result;
            }).map((company) => (
              <CompanyItem
                key={company.symbol}
                company={company}
                exchange={exchange}
              />
            ))}
          </ul>
        )}
    </div>
  );
}

export default Company;
