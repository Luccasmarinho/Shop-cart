import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Products from '../../components/Products/Products'
import ProviderApp from '../../context/ProviderApp'
import ToastAlert from '../../components/ToastAlert/ToastAlert'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Products />
      <ToastAlert />
    </div>
  )
}

export default Home