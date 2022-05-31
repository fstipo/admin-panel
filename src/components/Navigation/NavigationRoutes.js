import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Projects from '../Pages/Projects';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Orders from '../Pages/Orders';
import Products from '../Pages/Products';
import Customers from '../Pages/Customers';
import Details from '../Pages/Dashboard/Details';

const getUserIdHandler = (id) => console.log(id);

const NavigationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="projects" element={<Projects />} />
      <Route
        path="dashboard"
        element={<Dashboard onSaveId={getUserIdHandler} />}
      />
      <Route path="details" element={<Details />} />
      <Route path="orders" element={<Orders />} />
      <Route path="products" element={<Products />} />
      <Route path="costumers" element={<Customers />} />
    </Routes>
  );
};

export default NavigationRoutes;
