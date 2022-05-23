
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Products from './Pages/Home/Products';
import Footer from './Pages/Shared/Footer';
import Purchase from './Pages/Purchase/Purchase';

function App() {
  return (
    <div className='mx-5'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='products' element={<Products></Products>}></Route>
        <Route path='purchase' element={<Purchase></Purchase>}></Route>

        <Route path='about' element={<About></About>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
