import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import FeatureSection from './components/FeatureSection';
import Footer from './components/Footer';
import {ProductList} from './components/ProductList';
import { NotFound } from './components/NotFound';
import { LoginPage } from './components/LoginPage';
import { ProductDetail } from './components/ProductDetail';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header title="ShopHub" />
      <Banner
        subtitle="Welcome to our store"
        buttonText="Shop Now"
      />

      <Routes>
        <Route path="/" element={<FeatureSection />} />
        <Route path="/products" element={<ProductList />} />
        <Route path='/products/:id' element={<ProductDetail />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer
        studentName="Nguyen Van A"
        courseName="Full-Stack Web Development"
      />
    </>
  )
}

export default App
