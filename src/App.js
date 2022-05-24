import React from 'react';
import Home from './components/Pages/Home';
import Projects from './components/Pages/Projects';
import './App.css';
import Customers from './components/Pages/Customers';
import Dashboard from './components/Pages/Dashboard';
import Orders from './components/Pages/Orders';
import Products from './components/Pages/Products';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="orders" element={<Orders />} />
        <Route path="products" element={<Products />} />
        <Route path="costumers" element={<Customers />} />
      </Routes>
    </>
  );
};

export default App;
