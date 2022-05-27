import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import CompanyItem from '../components/company/CompanyItem';

const Container = () => {
  <BrowserRouter>
    <CompanyItem />
  </BrowserRouter>;
};

it('renders correctly', () => {
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
});
