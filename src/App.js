import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './pages/NotFound';
import Homepage from './pages/Homepage';
import MyProfile from './pages/MyProfile';
import NavBar from './components/navbar/NavBar';
import Company from './components/company/Company';
import CompanyQuotes from './components/companyQuotes/CompanyQuotes';

function App() {
  return (
    <>
      <div className="screen-area">
        <NavBar />
        <Routes>
          <Route path="/financial-metrics" exact="true" element={<Homepage />} />
          <Route path="/company/:id" element={<Company />} />
          <Route path="/quotes/:id" element={<CompanyQuotes />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
