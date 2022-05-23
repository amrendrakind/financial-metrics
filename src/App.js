import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './pages/NotFound';
import Homepage from './pages/Homepage';
import MyProfile from './pages/MyProfile';
import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/financial-metrics" exact="true" element={<Homepage />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
