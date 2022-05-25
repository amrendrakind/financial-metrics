import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './pages/NotFound';
import Homepage from './pages/Homepage';
import MyProfile from './pages/MyProfile';
import NavBar from './components/navbar/NavBar';
import Company from './components/company/Company';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/financial-metrics" exact="true" element={<Homepage />} />
        <Route path="/comapny/:id" element={<Company />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
