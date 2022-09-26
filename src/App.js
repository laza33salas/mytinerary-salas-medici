import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Index from "../src/pages/Index"
import CityPage from './pages/CityPage';
import NewCityPage from './pages/NewCityPage';
import Layout from './Layouts/WebSiteLayout';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import NotFound from './pages/NotFound';
import Details from './pages/Details'
import EditCity from './components/EditCity/EditCity';
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import MyItinerary from "./pages/MyItinerary";
import MyProfile from './pages/MyProfile';
import { useSelector } from 'react-redux';
import EditProfile from './pages/EditProfile';

function App() {
  const rolUser = useSelector(state => state.user.user.role)
  
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/users/signin' element={<SignIn />} />
            <Route path='/users/signup' element={<SignUp />} />
            <Route path='/cities' element={<CityPage />} />
            <Route path='/cities/:id' element={<Details />} />
            <Route path='/myTineraries' element={rolUser == null ? <SignUp /> : <MyItinerary />} />
            <Route path='/profile/:id' element={rolUser == null ? <SignUp /> : <MyProfile />} />
            <Route path='/newCity' element={rolUser === 'admin' ? <NewCityPage /> : <SignUp />} />
            <Route path='/edit-City' element={rolUser === 'admin' ? <EditCity /> : <SignUp />} />
            <Route path='/edit-Profile/:id' element={rolUser == 'null' ? <SignUp/> : <EditProfile/>} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
