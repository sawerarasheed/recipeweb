import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import SearchFood from './SearchFood';




function NavigationBar() {
  return (
    <>
    
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand >Navbar</Navbar.Brand>
          <Nav className="mx-auto">
            <Link className='nav-link ' to="/home">Home</Link>
            <Link className='nav-link ' to="/menu">Menu</Link>
            <Link className='nav-link ' to="/contact">Contact</Link>
            <Link className='nav-link ' to="/Login">Login</Link>
            <Link className='nav-link ' to="/SignUp">SignUp</Link>
          </Nav>
          <SearchFood/>
        </Container>
      </Navbar>
    </>
  )
}

export default NavigationBar