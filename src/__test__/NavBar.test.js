import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import Navbar from '../components/navbar/NavBar';

const Container = () => {
  <BrowserRouter>
    <Navbar />
  </BrowserRouter>;
};

it('renders correctly', () => {
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
});
