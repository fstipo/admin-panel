import React from 'react';

const Container = ({ children }) => {
  return (
    <div className="container-fluid">
      <div className="row">{children}</div>
    </div>
  );
};

export default Container;
