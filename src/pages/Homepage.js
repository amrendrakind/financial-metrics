import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { exchangeLists } from '../redux/exchange/exchange';
import HomepageItem from './HomepageItem';
import './Homepage.css';

const Homepage = () => {
  const dispatch = useDispatch();
  const exchange = useSelector((state) => state.Exchange);
  useEffect(() => {
    if (exchange.length === 0) {
      dispatch(exchangeLists());
    }
  }, []);

  return (
    <ul className="exchange-list-conatiner">
      {exchange.map((exchange) => (
        <HomepageItem
          key={exchange.id}
          exchange={exchange}
        />
      ))}
    </ul>
  );
};

export default Homepage;
