import './App.css';
import Home from './componentskobau/Navbar components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Types from './componentskobau/Navbar components/Types';
import Bands from './componentskobau/Navbar components/Bands';
import Login from './componentskobau/Navbar components/Login';
import Addtocart from './componentskobau/Navbar components/Addtocart';
import Signup from './componentskobau/Navbar components/Signup';
import Admin from './componentskobau/admin/Admin';
import Iteminsider from './componentskobau/insider/Iteminsider';
import ShowLaptop from './componentskobau/body components/ShowLaptop';
import Typeshover from './componentskobau/Navbar components/Typeshover';
import Navbarupocurrency from './componentskobau/Navbar components/Navbarupcurrency';
import LaptopPage from './componentskobau/body components/categorypages/LaptopPage';
function App() {
  return (
    <BrowserRouter>
    <div className='bg-slate-100'>
      <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/types' element={<Types/>} />
      <Route exact path='/brands' element={<Bands/>} />
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/signup' element={<Signup/>}/>
      <Route exact path='/addtocart' element={<Addtocart/>}/>
      <Route  exact path='/admin' element={<Admin/>}/>
      <Route exact path='/showlaptop' element={<ShowLaptop/>} />
      <Route exact path='/laptopinsider' element={<Iteminsider/>} />
      <Route exact path='/type' element={<Typeshover/>} />
      <Route exact path='/currency' element={<Navbarupocurrency/>}/>
      <Route exact path='laptoppage' element={<LaptopPage/>}/>
      </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
