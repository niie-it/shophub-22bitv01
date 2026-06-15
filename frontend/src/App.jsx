import { useState } from 'react'
import Header from './components/Header';
import Banner from './components/Banner';
import FeatureSection from './components/FeatureSection';
import Footer from './components/Footer';
import {ProductList} from './components/ProductList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header title="ShopHub" />
      <Banner
        subtitle="Welcome to our store"
        buttonText="Shop Now"
      />
      {/* <FeatureSection /> */}
      <ProductList />
      <Footer
        studentName="Nguyen Van A"
        courseName="Full-Stack Web Development"
      />
    </>
  )
}

export default App
