import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './components/Title';
import Home from './components/Home';
import Gallery from './components/Gallery';
import About from './components/About';
import Pricing from './components/Pricing';

function App() {
  return (
    <>
      <Title/>
      <Home/>
      <About/>
      <Gallery/>
      <Pricing/>
    </>
  );
}

export default App;
