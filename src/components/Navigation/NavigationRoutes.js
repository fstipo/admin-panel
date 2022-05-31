import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Projects from '../Pages/Projects';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Orders from '../Pages/Orders';
import Products from '../Pages/Products';
import Customers from '../Pages/Customers';
import Details from '../Pages/Dashboard/Details';
export const dataContext = React.createContext();

const NavigationRoutes = () => {
  const [selectedUserId, setSelectedUserId] = useState('');
  const selectedUserHandler = (userId) => {
    setSelectedUserId(userId);
  };

  return (
    <dataContext.Provider value={selectedUserId}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route
          path="dashboard"
          element={<Dashboard onSelectId={selectedUserHandler} />}
        />
        <Route path="details" element={<Details userId={selectedUserId} />}>
          <Route path="user/:selectedUserId" element={<h2>Hello</h2>} />
        </Route>

        <Route path="orders" element={<Orders />} />
        <Route path="products" element={<Products />} />
        <Route path="costumers" element={<Customers />} />
      </Routes>
    </dataContext.Provider>
  );
};

export default NavigationRoutes;
