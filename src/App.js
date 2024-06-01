import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import MainFooter from './components/Layout/footer/Footer';
import Header from './components/Layout/header/Header';
import AboutUs from './pages/AboutUs';
import EventDetail from './pages/Events/EventDetail';
import Contacts from './pages/Contacts';

import OrderPage from './pages/OrderPage/OrderPage';
import News from './pages/News';

const App = () => {
  return (
    <>
      <Header />
      <main style={{ minHeight: '100vh' }}>
        <Routes>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/product-detail/" element={<EventDetail />} />
          <Route path="*" element={<Navigate to="/about" />} />
        </Routes>
      </main>
      <MainFooter />
    </>
  );
};

export default App;
