import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import {
  setAuthorization,
  setAuthToken,
  clearUserData,
  logoutUser,
} from '../../store/actions';
// import { colors, shadow } from '../../variables/styles';

import Board from './Board';
import Chat from './Chat';

const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #4d6c85;
`;

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  width: 100%;
  max-width: 120rem;
`;

const Middle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 4rem 0;
`;

class Game extends Component {
  constructor() {
    super();

    this.state = {
      textHistory: [],
      text: '',
    };
  }

  render() {
    const { textHistory, text } = this.state;
    return (
      <MainWrapper>
        <Container>
          <Middle>
            <Board />
            <Chat text={text} textHistory={textHistory} />
          </Middle>
        </Container>
      </MainWrapper>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.isloggedIn,
  userData: state.userData,
});

const mapDispatchToProps = {
  setAuthorization,
  setAuthToken,
  clearUserData,
  logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
