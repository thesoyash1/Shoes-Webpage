import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import styles from './NavHomePage.module.css';

const NavHomePage = () => {
  return (
    <>
      <div className={styles.alertTop}>
        <strong>Info!</strong> Enjoy extra 35% off* Diwali sale items with code: FRESH
      </div>

      <div className={styles.containerNav}>
        <div className={styles.siteLogo}>
          <img src="https://nike-shoe-store.vercel.app/logo.svg" alt="logo" />
        </div>

        <div className={styles.navSite}>
          <Nav defaultActiveKey="/home">
            <Nav.Item>
            <Link to="/about" className={styles.aboutLink}>About</Link>
            </Nav.Item>

            <Nav.Item>
              <Link to="/contact" className={styles.contactLink}>Contact</Link>
            </Nav.Item>

            <Nav.Item>
              <Link to="link-2" className={styles.menShoesLink}>Men's Shoes</Link>
            </Nav.Item>
          </Nav>
        </div>

        <div className={styles.addCartIcon}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
          </svg>
        </div>
      </div>
    </>
  );
};

export default NavHomePage;
