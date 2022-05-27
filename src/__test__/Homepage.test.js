import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import Homepage from '../pages/Homepage';

const Container = () => {
  <BrowserRouter>
    <Homepage />
  </BrowserRouter>;
};

it('renders correctly', () => {
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
});
