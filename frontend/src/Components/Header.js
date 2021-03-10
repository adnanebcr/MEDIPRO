// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../Actions/userActions";
// import logo from "../Assets/logo-medipro.png";
// import { NavDropdown, Nav, Navbar } from "react-bootstrap";
// import "../App.css";
// import { LinkContainer } from "react-router-bootstrap";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const dispatch = useDispatch();
//   const userlogin = useSelector((state) => state.userlogin);
//   const { userInfo } = userlogin;
//   const logoutHandler = () => {
//     dispatch(logout());
//   };

//   return (
//     <header id="headerComponent">
//       <Navbar bg="primary" variant="dark" expand="lg">
//         <Link to="/">
//           <Navbar.Brand>
//             {" "}
//             <img className="App-logo" alt="..." src={logo} />
//           </Navbar.Brand>
//         </Link>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           {userInfo ? (
//             <Nav className="ml-auto">
//               <LinkContainer to="/Commande">
//                 <Nav.Link>Passer une commande</Nav.Link>
//               </LinkContainer>
//               <LinkContainer to="/History">
//                 <Nav.Link>Consulter vos commandes</Nav.Link>
//               </LinkContainer>
//               <LinkContainer to="/Fiches">
//                 <Nav.Link>Fiches Pharmaceutiques</Nav.Link>
//               </LinkContainer>

//               <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
//                 <LinkContainer to="/profile">
//                   <NavDropdown.Item> Consulter le profil</NavDropdown.Item>
//                 </LinkContainer>
//                 <NavDropdown.Divider />
//                 <LinkContainer to="/SignIn">
//                   <NavDropdown.Item onClick={logoutHandler}>
//                     Se deconnecter
//                   </NavDropdown.Item>
//                 </LinkContainer>
//               </NavDropdown>
//             </Nav>
//           ) : (
//             <Nav className="ml-auto">
//               <LinkContainer to="/About">
//                 <Nav.Link>à propos de nous</Nav.Link>
//               </LinkContainer>
//               <LinkContainer to="/Products">
//                 <Nav.Link>Nos produits</Nav.Link>
//               </LinkContainer>
//               <LinkContainer to="/Contact">
//                 <Nav.Link>Contactez nous</Nav.Link>
//               </LinkContainer>
//               <NavDropdown title="Espace Pharmacien" id="basic-nav-dropdown">
//                 <LinkContainer to="/SignIn">
//                   <NavDropdown.Item> Se connecter</NavDropdown.Item>
//                 </LinkContainer>
//                 <NavDropdown.Divider />
//                 <LinkContainer to="/SignUp">
//                   <NavDropdown.Item>S'enregistrer</NavDropdown.Item>
//                 </LinkContainer>
//               </NavDropdown>
//             </Nav>
//           )}
//           {userInfo && userInfo.isAdmin && (
//             <NavDropdown title="Admin" id="adminmenu">
//               <LinkContainer to="/admin/userlist">
//                 <NavDropdown.Item>Users</NavDropdown.Item>
//               </LinkContainer>
//               <LinkContainer to="/admin/productlist">
//                 <NavDropdown.Item>Products</NavDropdown.Item>
//               </LinkContainer>
//               <LinkContainer to="/admin/orderlist">
//                 <NavDropdown.Item>Orders</NavDropdown.Item>
//               </LinkContainer>
//             </NavDropdown>
//           )}
//         </Navbar.Collapse>
//       </Navbar>
//     </header>
//   );
// };

// export default Header;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Actions/userActions";
import logo from "../Assets/logo-medipro.png";
import { NavDropdown, Nav, Navbar } from "react-bootstrap";
import "../App.css";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const userlogin = useSelector((state) => state.userlogin);
  const { userInfo } = userlogin;
  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header id="headerComponent">
      {userInfo && userInfo.issuperAdmin ? (
        <>
          <Navbar bg="primary" variant="dark" expand="lg">
            <Navbar.Brand>
              {" "}
              <img className="App-logo" alt="..." src={logo} />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <NavDropdown title="Admin" id="adminmenu">
                  <LinkContainer to="/admin/userlist">
                    <NavDropdown.Item>Utilisateurs</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/productlist">
                    <NavDropdown.Item>Produits</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/orderlist">
                    <NavDropdown.Item>Commandes</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/SignIn">
                    <NavDropdown.Item onClick={logoutHandler}>
                      Se deconnecter
                    </NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </>
      ) : userInfo && userInfo.isAdmin ? (
        <>
          <Navbar bg="primary" variant="dark" expand="lg">
            <Navbar.Brand>
              {" "}
              <img className="App-logo" alt="..." src={logo} />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <NavDropdown title="Admin" id="adminmenu">
                  <LinkContainer to="/admin/orderlist">
                    <NavDropdown.Item>Commandes</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/SignIn">
                    <NavDropdown.Item onClick={logoutHandler}>
                      Se deconnecter
                    </NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </>
      ) : userInfo ? (
        <>
          <Navbar bg="primary" variant="dark" expand="lg">
            <Link to="/FirstPage">
              <Navbar.Brand>
                {" "}
                <img className="App-logo" alt="..." src={logo} />
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <LinkContainer to="/Commande">
                  <Nav.Link>Passer une commande</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/History">
                  <Nav.Link>Consulter vos commandes</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/Fiches">
                  <Nav.Link>Fiches Pharmaceutiques</Nav.Link>
                </LinkContainer>

                <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item> Consulter le profil</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Divider />
                  <LinkContainer to="/SignIn">
                    <NavDropdown.Item onClick={logoutHandler}>
                      Se deconnecter
                    </NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </>
      ) : (
        <>
          <Navbar bg="primary" variant="dark" expand="lg">
            <Link to="/">
              <Navbar.Brand>
                {" "}
                <img className="App-logo" alt="..." src={logo} />
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <LinkContainer to="/About">
                  <Nav.Link>à propos de nous</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/Products">
                  <Nav.Link>Nos produits</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/Contact">
                  <Nav.Link>Contactez nous</Nav.Link>
                </LinkContainer>
                <NavDropdown title="Espace Pharmacien" id="basic-nav-dropdown">
                  <LinkContainer to="/SignIn">
                    <NavDropdown.Item> Se connecter</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Divider />
                  <LinkContainer to="/SignUp">
                    <NavDropdown.Item>S'enregistrer</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </>
      )}
    </header>
  );
};

export default Header;
