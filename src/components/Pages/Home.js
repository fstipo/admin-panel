import React from 'react';
import Container from '../Container';
import Sidebar from '../Sidebar';
import Header from '../UI/Header';

const Home = () => {
  return (
    <Container>
      <Sidebar />
      <div class="col py-3">
        <Header name="Home" icon="house-door" />
      </div>
    </Container>
  );
};

export default Home;
