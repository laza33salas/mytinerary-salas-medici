import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Index from "../src/pages/Index"
import CityPage from './pages/CityPage';
import NewCityPage from './pages/NewCityPage';
import Layout from './Layouts/WebSiteLayout';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import NotFound from './pages/NotFound';
import Details from './pages/Details'
import EditCity from './components/EditCity/EditCity';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop/>
        <Layout>
          <Routes>
            <Route path='/' element={<Index/>}/>
            <Route path='/cities' element={<CityPage/>}/>
            <Route path='/newCity' element={<NewCityPage/>}/>
            <Route path='/cities/:id' element={<Details/>}/>
            <Route path='/edit-City' element={<EditCity/>}/>
           <Route path='*' element={<NotFound/>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    
    </div>
    
  );
}

export default App;
