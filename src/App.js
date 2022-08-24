import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Index from "../src/pages/Index"
import CityPage from './pages/CityPage';
import NewCityPage from './pages/NewCityPage';
import Layout from './Layouts/Layout';





function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
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
