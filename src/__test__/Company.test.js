import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import Company from '../components/company/Company';

const Container = () => {
  <BrowserRouter>
    <Company />
  </BrowserRouter>;
};

it('renders correctly', () => {
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
});
