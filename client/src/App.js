import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';

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

        <Route
          path='/shop'
          element={<Shop/>}
        />

      </Routes>

    </Container>
  );
}

export default App;
