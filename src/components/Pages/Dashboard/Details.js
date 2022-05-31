import React from 'react';
import Header from '../../UI/Header';

const Details = ({ selectedUserID }) => {
  return (
    <>
      <Header name="Details" icon="cloud-download" />
      <div>ID: {selectedUserID}</div>
    </>
  );
};

export default Details;
