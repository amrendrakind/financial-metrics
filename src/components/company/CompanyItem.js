import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { companyDataFromAPI } from '../redux/company/company';

function CompanyItem(props) {
//   const dispatch = useDispatch();

  const { company } = props;
  const { symbol, name } = company;

  //   const companySelected = () => {
  //     const company = symbol;
  //     dispatch(companyDataFromAPI(company));
  //   };

  return (
    <li
      key={symbol}
      className="companyName"
    >
      <Link
        to={`/comapny/${symbol}`}
        className="company-detail-container"
        // onClick={companySelected}
      >
        <div className="company-symbol">
          {symbol}
        </div>
        <div className="company-name">
          {name}
        </div>

      </Link>
    </li>
  );
}
export default CompanyItem;

CompanyItem.propTypes = {
  company:
          PropTypes.objectOf(
            {
              name: PropTypes.string.isRequired,
              symbol: PropTypes.string.isRequired,
            },
          ).isRequired,
};
