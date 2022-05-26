import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import CompanyItem from './CompanyItem';
import './Company.css';
import SearchBar from '../search/SearchBar';

function Company() {
  const company = useSelector((state) => state.Company);

  const { id } = useParams();

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
        id={id}
      />
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
          />
        ))}
      </ul>
    </div>
  );
}

export default Company;
