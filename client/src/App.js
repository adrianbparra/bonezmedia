import React from 'react';
import {Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Installs from './pages/Installs';
import Item from './pages/Item';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ContactUs from './pages/ContactUs';

import { Container } from 'semantic-ui-react'
import './App.css';
import Cart from './pages/Cart';

function App() {
  return (
    <Container>
      <Navbar/>

      <Routes>
        <Route
          exact
          path='/'

          element={<Home/>}
        />

        <Route
          path='/shop'
          element={<Shop/>}
        />

        <Route 
          path='/shop/:id' 
          element={<Item/>}
        />

        <Route
          path='/installs'
          element={<Installs/>}
        />

        <Route
          path='/cart'
          element={<Cart/>}
        />

        <Route
          path='/privacypolicy'
          element={<PrivacyPolicy/>}
        />

        <Route
          path='/contactus'
          element={<ContactUs/>}
        />
      </Routes>

      <Footer/>

    </Container>
  );
}

export default App;
