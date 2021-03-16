import React from "react";
import { Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logout } from "../../Actions/userActions";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import "./Sidebar.css";
const Side = ({ userInfo }) => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <>
      <Nav className="shadow   rounded col-md-12 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky"></div>
        <h4 className="text-center">Bienvenue : {userInfo.name}</h4>
        <hr className="hr-light" />
        <Nav.Item>
          <Nav.Link>
            <Link to="/Commande">
              <h6 className="black-text">Nouvelle commande</h6>
            </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="black-text" eventKey="link-1">
            <Link to="/History">
              <h6 className="black-text"> Historique commandes</h6>
            </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="black-text" eventKey="link-2">
            <Link to="/Fiches">
              <h6 className="black-text">Fiches pharmaceutiques</h6>
            </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="black-text" eventKey="link-2">
            <Link to="/Profile">
              <h6 className="black-text">Profil</h6>
            </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="black-text" eventKey="link-2">
            <h6 className="black-text" onClick={logoutHandler}>
              Se déconnecter
            </h6>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};
const Sidebar = withRouter(Side);
export default Sidebar;
