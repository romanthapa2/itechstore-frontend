import './App.css';
import Home from './components/Navbar components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bands from './components/Navbar components/Bands';
import Login from './components/Navbar components/Login';
import Addtocart from './components/body components/cart/AddToCart';
import Signup from './components/Navbar components/Signup';
import Admin from './components/admin/Admin';
import Iteminsider from './components/body components/ItemInsider';
import LaptopCard from './components/body components/LaptopCard';
import Types from './components/Navbar components/Types';
import Navbarupocurrency from './components/Navbar components/Navbarupcurrency';
import LaptopPage from './components/body components/LaptopPage';
import CheckOutPage from './components/body components/checkout/CheckOutPage';
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
      <Route exact path='/LaptopCard' element={<LaptopCard/>} />
      <Route exact path='/laptopinsider' element={<Iteminsider/>} />
      <Route exact path='/type' element={<Types/>} />
      <Route exact path='/currency' element={<Navbarupocurrency/>}/>
      <Route exact path='laptoppage' element={<LaptopPage/>}/>
      <Route exact path='/checkoutpage' element={<CheckOutPage/>}/>
      </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
