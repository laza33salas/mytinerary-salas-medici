import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Index from "../src/pages/Index"
import CityPage from './pages/CityPage';
import NewCityPage from './pages/NewCityPage';
import Layout from './Layouts/WebSiteLayout';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import NotFound from './pages/NotFound';
import Details from './pages/Details'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop/>
        <Layout>
          <Routes>
            <Route path='/' element={<Index/>}/>
            <Route path='/Cities' element={<CityPage/>}/>
            <Route path='/NewCity' element={<NewCityPage/>}/>
            <Route path='/Cities/:id' element={<Details/>}/>
           <Route path='*' element={<NotFound/>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    
    </div>
    
  );
}

export default App;
