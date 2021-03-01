/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {useDispatch,useSelector} from 'react-redux'

import { MDBNavbar, MDBContainer,  MDBNavbarNav, MDBNavItem, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar, NavDropdown} from 'react-bootstrap';
import logo from '../Assets/logo-medipro.png';
import { logout } from '../actions/userActions'
import '../App.css';






   const NavbarSection =() =>{
    

  const dispatch = useDispatch()
    const userlogin = useSelector(state => state.userlogin)
    const {userInfo}=userlogin
     const logoutHandler = () => {
    dispatch(logout())
  }

        return (
            <section id="Navbars">
                <div>
                    <header>
                        <Router>
                           
                                   

                                      
                                            {userInfo ? (  <>
                                                    <MDBNavbar color="unique-color-dark"  fixed='top' scrolling  dark expand="lg" >
                                <MDBContainer fluid>
                                    <Navbar.Brand >
                                    <img className="App-logo"
                                        alt="..."
                                        src={logo}
                                    />
                                </Navbar.Brand>
 
                                       <MDBNavbarNav className="Navbar-items1" right>
                                            
              <NavDropdown.Item href="/Commande" > Passer une commande</NavDropdown.Item>
           
              <NavDropdown.Item href="/History" > Bons de commandes</NavDropdown.Item>
           
              <NavDropdown.Item href="/Fiches" > Fiches Pharmaceutiques</NavDropdown.Item>
            
              
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                   {userInfo.name}
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default ">
                  <MDBDropdownItem className="black-text" href="#!"><span> Bienvenue {userInfo.name}</span></MDBDropdownItem>
                  <hr/>
                  <MDBDropdownItem className="black-text" href="/profile">Consulter le profil</MDBDropdownItem>
                  <MDBDropdownItem className="black-text" href="#!" onClick={logoutHandler}>Se déconnecter</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
              
            
          </MDBNavbarNav>
          
                                    </MDBContainer>
                            </MDBNavbar>
                      
                  </>):  <MDBNavbar color="unique-color-dark"  fixed='top' scrolling  dark expand="lg" >
                                <MDBContainer fluid>
                                    <Navbar.Brand href="/index">
                                    <img className="App-logo"
                                        alt="..."
                                        src={logo}
                                    />
                                </Navbar.Brand>
                                            <MDBNavbarNav right className="Navbar-items1">                                           
                                                        <MDBNavItem >
                                                            <NavDropdown.Item href="/About" >à propos de nous</NavDropdown.Item>
                                                        </MDBNavItem>
                                                        <MDBNavItem>
                                                            <NavDropdown.Item href="/Products" > Nos produits</NavDropdown.Item>
                                                        </MDBNavItem>
                                                        <MDBNavItem>
                                                            <NavDropdown.Item href="/Contact" > Contactez-nous</NavDropdown.Item>
                                                        </MDBNavItem>
                                                        <MDBNavItem>  <NavDropdown.Item href="/Signin" > <span className="mr-2">Espace Pharmacien</span></NavDropdown.Item></MDBNavItem>
                     </MDBNavbarNav>
                                      
                                       


                                    </MDBContainer>
                            </MDBNavbar>}
                        </Router>
                    </header>
                </div>

            </section>
        );
    }


      export default NavbarSection

