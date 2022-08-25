import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Index from "../src/pages/Index"
import CityPage from './pages/CityPage';
import NewCityPage from './pages/NewCityPage';
import Layout from './Layouts/WebSiteLayout';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import NotFound from './pages/NotFound';





function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop/>
        <Layout>
          <Routes>
           <Route path='*' element={<NotFound/>}/>
            <Route path='/' element={<Index/>}/>
            <Route path='/cities' element={<CityPage/>}/>
            <Route path='/newcity' element={<NewCityPage/>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    
   
   
    </div>
    
  );
}

export default App;
