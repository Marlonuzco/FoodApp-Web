import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaUserAlt, FaLongArrowAltRight } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.css";

import logo from "../../assets/images/icon2.png";
import styles from "./styles.module.css";

function NavbarComp({ auth }) {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY > 50) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <Navbar
      bg={colorChange ? "dark" : "transparent"}
      variant={colorChange ? "dark" : "dark"}
      expand="lg"
      fixed="top"
    >
      <Container fluid>
        <Navbar.Brand>
          <Link to="/" className="navbar-brand">
            <img
              width="50px"
              height="auto"
              src={logo}
              alt="logo"
              className={styles.imgLogo}
            />
            Food App web
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {auth.isLogged ? (
              <>
                <Link to="/Cart" className="nav-link">
                  Cart
                </Link>
                <Link to="/Favorites" className="nav-link">
                  Favorites
                </Link>
              </>
            ) : (
              <>
                <Link to="/Login" className="navbar-brand">
                  Log in {renderLoginIcon()}
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function renderLoginIcon() {
  return <FaUserAlt size={15} className={styles.LoginIcon} />;
}
function renderArrowIcon() {
  return <FaLongArrowAltRight size={25} />;
}

export default connect((store) => ({
  auth: store.auth,
}))(NavbarComp);
