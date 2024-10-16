import React from 'react';
import styles from './HomePage.module.css';
import NavHomePage from './NavHomePage';

const HomePage = () => {
  return (
    <>
      <NavHomePage />
      <div className={styles.allSiteShoes}>
        <div className={styles.nikeBack}>
          <h2>Welcome to Our Shoe Store</h2>
          <p>Explore the latest collections of Nike shoes and enjoy exclusive discounts!</p>
        </div>
      </div>
      <div className={styles.section_one}>
        <div className={styles.section_one_container}>
          <div className={styles.item1}>
            <img src='https://images.unsplash.com/photo-1561909848-977d0617f275?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXxlbnwwfHwwfHx8MA%3D%3D' alt='item1' />
          </div>
          <div className={styles.item2}>
          <img src='https://images.unsplash.com/photo-1576664839181-e08ac3624a6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D' alt='item2' />
          </div>
          <div className={styles.item3}>
          <img src='https://images.unsplash.com/photo-1570425387687-d2a34c7304a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8' alt='item3' />
          </div>
          <div className={styles.item4}>
            <h4>About US</h4>
            <h3>We Prodvide High quality shoes.</h3>
            <p>Kick your style into high gear with bold peices inspired by the racetrack.</p>
            <p> Bringing back iconic tones of teal</p>
            <button className={styles.explore_btn}>Explore Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
