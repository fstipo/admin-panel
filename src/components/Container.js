import React from 'react';

const Container = ({ children }) => {
  return (
    <div className="container-fluid">
      <div class="row">{children} </div>
    </div>
  );
};

export default Container;
