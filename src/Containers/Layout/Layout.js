import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import socketIOClient from 'socket.io-client';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Game from '../Game/Game';

import {
  setAuthorization,
  setAuthToken,
  clearUserData,
  logoutUser,
} from '../../store/actions';
import { colors, shadow } from '../../variables/styles';

const endpoint = 'http://localhost:8081';
const socket = socketIOClient(endpoint);

const SharedNavigationCss = `
	display: flex;
	flex-direction: column;
	font-size: 3rem;
`;

const MainWrapper = styled.div`
  width: 100%;
  background: ${colors.background};
`;

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  width: 100%;
  max-width: 100rem;
`;

const ChildrenContainer = styled.div`
  display: flex;
  margin: 0 auto;
`;

const LeftSide = styled.div`
  ${SharedNavigationCss}
`;

const Middle = styled.div`
  ${SharedNavigationCss}
`;

const RightSide = styled.div`
  align-items: flex-end;
  ${SharedNavigationCss}
`;

const StyledLink = styled(Link)`
  background-color: ${colors.button};
  padding: 1.2rem 1.6rem;
  width: ${({ wide }) => (wide ? '20rem' : '13rem')};
  text-align: center;
  text-decoration: none;
  margin-top: 0.6rem;
  box-shadow: ${shadow.default};
`;

const StyledButton = styled.button`
  background-color: ${colors.button};
  padding: 1.2rem 1.6rem;
  width: ${({ wide }) => (wide ? '20rem' : '13rem')};
  text-decoration: none;
  text-align: center;
  margin-top: 0.6rem;
  box-shadow: ${shadow.default};
`;

const SearchButton = styled(StyledButton)`
  margin-top: 2rem;
`;

const CoinsInfo = styled.p`
  font-size: 1.6rem;
  margin: 0 auto;
  padding: 1rem;
`;

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: ${colors.primaryBackground};
  color: ${colors.white};
  font-size: 2rem;
  padding: 2rem;
  text-align: center;
`;

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      room: '',
      gameStatus: 0,
      matchStatistics: {
        hit: 0,
        miss: 0,
        itemsUsed: 0,
        accuracy: '',
      },
    };
  }

  // TODO: create service for socket events
  componentDidMount() {
    socket.on('roomName', ({ room, gameStatus }) => {
      this.setState({ room, gameStatus });
    });
  }

  onSearchGame = () => {
    socket.emit('searchGame');
  };

  onLeaveGame = () => {
    const { room } = this.state;
    socket.emit('leaveGame', room);
  };

  logout = async () => {
    await this.props.logoutUser();
  };

  saveUserStatistics = () => {
    // send current statistics to database
  };
  render() {
    const { room, gameStatus } = this.state;
    const { children, userData } = this.props;

    if (gameStatus === 2) {
      return <Game />;
    }

    if (gameStatus === 3) {
    }
    return (
      <MainWrapper>
        <Container>
          <LeftSide>
            <StyledButton align="right" wide onClick={this.logout}>
              Wyloguj się
            </StyledButton>
            <StyledLink to="/game/profil" align="right">
              Profil
            </StyledLink>
          </LeftSide>
          <Middle>
            {room}
            {!room && (
              <SearchButton wide onClick={this.onSearchGame}>
                SEARCH GAME
              </SearchButton>
            )}
            {room && (
              <StyledButton wide onClick={this.onLeaveGame}>
                LEAVE GAME
              </StyledButton>
            )}
            <CoinsInfo>ZETONY: {userData.coins}</CoinsInfo>
          </Middle>
          <RightSide>
            <StyledLink to="/game/sklep" align="left" wide>
              Sklep
            </StyledLink>
            <StyledLink to="/game/ranking" align="left">
              Ranking
            </StyledLink>
          </RightSide>
        </Container>
        <ChildrenContainer>{children}</ChildrenContainer>
        <Footer>
          © {new Date().getFullYear()} S Team. All rights reserved.
        </Footer>
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

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
