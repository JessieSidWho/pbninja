import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './components/Title';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <>
      <Title/>
      <Home/>
      <About/>
    </>
  );
}

export default App;
