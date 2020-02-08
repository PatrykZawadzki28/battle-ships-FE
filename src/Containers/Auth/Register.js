import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import Register from '../../Components/Auth/Register';
import backgroundImage from '../../Img/thumb-1920-255067.png';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: transparent url(${backgroundImage}) no-repeat padding-box;
  background-size: cover;
`;

const Header = styled.h1`
  font-size: 5rem;
  margin-bottom: 5rem;
`;

class Auth extends Component {
  render() {
    return (
      <Container>
        <Header>BATTLESHIPS</Header>
        <Register />
      </Container>
    );
  }
}

export default withRouter(Auth);
