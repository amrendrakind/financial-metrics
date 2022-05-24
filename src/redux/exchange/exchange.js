import exchangelist from './exchangelist';
import { EXCHANGE } from '../types';

const initialState = [];

const exchangeLists = () => ({
  type: EXCHANGE,
  payload: exchangelist,
});

const exchangeReducer = (state = initialState, action) => {
  switch (action.type) {
    case EXCHANGE:
      return action.payload;
    default:
      return state;
  }
};

export default exchangeReducer;
export { exchangeLists };
