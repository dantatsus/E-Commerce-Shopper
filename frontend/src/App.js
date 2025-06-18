// src/App.js
import './App.css';
import Navbar from './Components/Navbar/Navbar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Ana sayfa: / */}
        <Route path="/" element={<Shop />} />

        {/* Kategori sayfaları */}
        <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
        <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
        <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kid" />} />

        {/* Ürün detay sayfası (örneğin: /product/123) */}
        <Route path="/product/:productId" element={<Product />} />

        {/* Sepet sayfası: /cart */}
        <Route path="/cart" element={<Cart />} />

        {/* Giriş/Kayıt sayfası: /login */}
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
