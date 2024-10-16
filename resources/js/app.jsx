import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import React from 'react';
import ReactDom from 'react-dom/client';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import NavHomePage from './components/NavHomePage';
import FooterPage from './components/FooterPage';

const App=()=>{
  return(
    <>
    
    <Router>
      <Routes>
        <Route
          path="/register"
          element={
            <>
              <HomePage />
              <FooterPage />
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
            <NavHomePage />
            <FooterPage />
            </>
            }
        />

        <Route
          path="/contact"
          element={
          <>
          <NavHomePage />
          <FooterPage />
          </>
          }
        />
      </Routes>
    </Router>

    </>
  )
};

if(document.getElementById('app')){
  const root=ReactDom.createRoot(document.getElementById('app'));
  root.render(<App />)
}

