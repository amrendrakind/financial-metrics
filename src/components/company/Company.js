import { useSelector } from 'react-redux';
import CompanyItem from './CompanyItem';
import './Company.css';

function Company() {
  const company = useSelector((state) => state.Company);

  return (
    <ul className="exchange-list-conatiner">
      {company.map((company) => (
        <CompanyItem
          key={company.id}
          company={company}
        />
      ))}
    </ul>
  );
}

export default Company;
