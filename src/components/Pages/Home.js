import React from 'react';
import Container from '../Container';
import Sidebar from '../Sidebar';
import Header from '../UI/Header';

const Home = () => {
  return (
    <Container>
      <Sidebar />
      <Header name="Home" icon="house-door" />
    </Container>
  );
};

export default Home;
