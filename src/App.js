
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Products from './Pages/Home/Products';
import Footer from './Pages/Shared/Footer';
import Purchase from './Pages/Purchase/Purchase';
import SignUp from './Pages/Login/SignUp';
import NotFound from './Pages/Shared/NotFound';
import AllProducts from './Pages/AllProducts/AllProducts';
import RequireAuth from './Pages/Login/RequireAuth';
import DashBoard from './Pages/DashBoard/DashBoard';
import MyOrders from './Pages/DashBoard/MyOrders';
import AddReview from './Pages/DashBoard/AddReview';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyProfile from './Pages/DashBoard/MyProfile';
import AllUsers from './Pages/DashBoard/AllUsers';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddProduct from './Pages/DashBoard/AddProduct';
import MoreProducts from './Pages/Home/MoreProducts';
import Payment from './Pages/DashBoard/Payment';
import Blogs from './Pages/Blogs/Blogs';
import PortFolio from './Pages/PortFolio/PortFolio';

function App() {
  return (
    <div className='mx-5 '>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='allProducts' element={<RequireAdmin><AllProducts></AllProducts></RequireAdmin>}></Route>
        <Route path='products' element={<Products></Products>}></Route>
        <Route path='moreProducts' element={<MoreProducts></MoreProducts>}></Route>
        <Route path='/product/:productId' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
        <Route path='/payment/:id' element={<RequireAuth><Payment></Payment></RequireAuth>}></Route>
        <Route path='dashboard' element={
          <RequireAuth><DashBoard></DashBoard></RequireAuth>}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='myOrders' element={<MyOrders></MyOrders>}></Route>
          <Route path='addReview' element={<AddReview></AddReview>}></Route>
          <Route path='allUsers' element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>}></Route>
          <Route path='addProduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
        </Route>

        
        <Route path='portFolio' element={<PortFolio></PortFolio>}></Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
