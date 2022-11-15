import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

import { Container } from 'semantic-ui-react'
import './App.css';

function App() {
  return (
    <Container className="main">
      <Navbar/>

      <Routes>
        <Route
          path='/'
          element={<Home/>}
        />
        

      </Routes>

    </Container>
  );
}

export default App;
