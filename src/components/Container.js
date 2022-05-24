import React from 'react';
import Sidebar from './Sidebar';
import Header from './UI/Header';

const Container = ({ children }) => {
  return (
    <div className="row min-vh-100">
      <div className="container-fluid d-flex">{children}</div>
    </div>
  );
};

export default Container;
