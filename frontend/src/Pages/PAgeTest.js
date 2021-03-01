import React from 'react'
import logo from '../Assets/logo-medipro.png';
import {  NavDropdown,Nav,Navbar } from 'react-bootstrap'
import '../App.css'
import { Container } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'


const Header = () => {
    return (
        <header id="headerComponent">
            <Navbar bg="primary" variant="dark" expand="lg">
  <Container fluid>
      <LinkContainer to ='/'><Navbar.Brand > <img className="App-logo" alt="..." src={logo}/></Navbar.Brand>
      </LinkContainer>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <LinkContainer to="/About"><Nav.Link >à propos de nous</Nav.Link></LinkContainer>
      <LinkContainer to="/Products">  <Nav.Link >Nos produits</Nav.Link></LinkContainer>
      <LinkContainer to="/Contact"><Nav.Link >Contactez nous</Nav.Link></LinkContainer>
      
    
      
      <NavDropdown title="Espace Pharmacien" id="basic-nav-dropdown">
       <LinkContainer to ="/SignIn"><NavDropdown.Item > Se connecter</NavDropdown.Item></LinkContainer> 
           <NavDropdown.Divider />
        <LinkContainer to ='/SignUp'><NavDropdown.Item >S'enregistrer</NavDropdown.Item></LinkContainer>

      </NavDropdown>
    </Nav>

  </Navbar.Collapse></Container>
</Navbar>
        </header>
    )
}

export default Header