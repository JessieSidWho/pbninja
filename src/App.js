import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './components/Title';
import Home from './components/Home';
import Gallery from './components/Gallery/gallery2';
import About from './components/About';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboveContact from './components/AboveContact';
import UnderContact from './components/UnderContact';

function App() {
  return (
    <>
      <Title/>
      <Home/>
      <About/>
      <Gallery/>
      <Pricing/>
      <AboveContact/>
      <UnderContact/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
