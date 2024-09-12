
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router,Routes ,Route} from 'react-router-dom'
import Shop from './Pages/shop';
import ShopCategory from './Pages/shopcategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/cart';
import Footer from './components/Footer/Footer';
import men_banner from './components/Assetss/banner_mens.png'
import women_banner from './components/Assetss/banner_women.png'
import kids_banner from './components/Assetss/banner_kids.png'


function App() {
  return (
    <div>
      <Router>

      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path='men' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='women' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='kids' element={<ShopCategory banner={kids_banner} category="kid"/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/product/:productId" element={<Product/>}/>
      
        <Route path="/login" element={<LoginSignup/>}/>
        <Route path='/cart'  element={<Cart/>}/>
        </Routes>

      </Router>

  <Footer/>
     
    </div>
  );
}

export default App;
