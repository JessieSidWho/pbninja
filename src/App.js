import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './components/Title';
import Home from './components/Home';
import Gallery from './components/Gallery/gallery2';
import About from './components/About';
import Pricing from './components/Pricing';
// import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Title/>
      <Home/>
      <About/>
      <Gallery/>
      <Pricing/>
      {/* <Contact/> */}
      <Footer/>
    </>
  );
}

export default App;
