import React from 'react';

import Header from '../../UI/Header';
import Grid from './Grid';

const Dashboard = () => {
  return (
    <>
      <Header name="Dashboard" icon="speedometer2" />
      <Grid />
    </>
  );
};

export default Dashboard;
