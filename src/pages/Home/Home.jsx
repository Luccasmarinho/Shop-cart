import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Products from '../../components/Products/Products'
import ProviderApp from '../../context/ProviderApp'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Products />
    </div>
  )
}

export default Home