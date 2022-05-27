import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { companyQuotesFromAPI } from '../../redux/companyquotes/companyquotes';

function CompanyItem(props) {
  const dispatch = useDispatch();

  const { company, exchange } = props;
  const { symbol, name } = company;
  const companySelected = () => {
    dispatch(companyQuotesFromAPI(exchange, symbol));
  };

  return (
    <li
      key={symbol}
      className="companyName"
    >
      <Link
        to={`/quotes/${symbol}`}
        className="company-detail-container"
        onClick={companySelected}
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
  exchange: PropTypes.string.isRequired,
};
