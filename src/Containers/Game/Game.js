import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import {
  setAuthorization,
  setAuthToken,
  clearUserData,
  logoutUser,
} from '../../store/actions';
import { colors } from '../../variables/styles';

import Board from './Board';
import Chat from './Chat';

const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
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

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
`;

const Ship = styled.div`
  height: 3.7rem;
  width: ${({ length }) => length && `${length * 3}rem`};
  background: ${colors.background};
  margin: 1rem;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ships = {
  Carrier: 5,
  Battleship: 4,
  Cruiser: 3,
  Submarine: 3,
  Destroyer: 2,
};

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
    const { room } = this.props;
    return (
      <MainWrapper>
        <Container>
          <LeftSide>
            {Object.entries(ships).map(([key, el]) => (
              <Ship length={el}>{key}</Ship>
            ))}
          </LeftSide>
          <Middle>
            <Board />
            {room}
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
