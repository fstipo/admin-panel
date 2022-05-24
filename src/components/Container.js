import React from 'react';
import Sidebar from './Sidebar';

const Container = ({ children }) => {
  return (
    <div className="row min-vh-100">
      <div className="container-fluid d-flex">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default Container;
