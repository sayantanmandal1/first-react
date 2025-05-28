import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
      <Navbar title="NavBar fr" about="About Us"/>
      <div className="container my-3">
        <TextForm tit="Custom textbox"/>
      </div>
    </>
  );
}

export default App;
