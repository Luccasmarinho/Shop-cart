import React from 'react'
import Search from '../Search/Search'
import ShopCart from '../ShopCart/ShopCart'
import { Container, AreaNav } from './NavbarStyle'

const Navbar = () => {
  return (
    <Container>
      <AreaNav>
        <div>
          <Search />
        </div>
        <div>
          <ShopCart />
        </div>
      </AreaNav>
    </Container>
  )
}

export default Navbar