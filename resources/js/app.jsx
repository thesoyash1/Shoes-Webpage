import './bootstrap';
import React from 'react';
import ReactDom from 'react-dom/client';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';

const App=()=>{
  return(
    <>
    <LoginPage />
    <HomePage />
    </>
  )
};

if(document.getElementById('app')){
  const root=ReactDom.createRoot(document.getElementById('app'));
  root.render(<App />)
}

