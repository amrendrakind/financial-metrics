import { useSelector } from 'react-redux';
import CompanyItem from './CompanyItem';
import './Company.css';

function Company() {
  const company = useSelector((state) => state.Company);
  return (
    <ul className="company-list-conatiner">
      {company.map((company) => (
        <CompanyItem
          key={company.symbol}
          company={company}
        />
      ))}
    </ul>
  );
}

export default Company;
