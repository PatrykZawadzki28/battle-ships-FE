import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import socketIOClient from 'socket.io-client';
import { connect } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';

import Game from '../Game/Game';
import url from '../../constants/connection';

import {
  setAuthorization,
  setAuthToken,
  clearUserData,
  logoutUser,
  fetchUserData,
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
  position: relative;

  span {
    position: absolute;
    right: 0.4rem;
    top: 0.4rem;
    cursor: pointer;
    font-size: 1.6rem;
  }
`;

const CoinsInfo = styled.p`
  font-size: 1.6rem;
  margin: 0.6rem auto;
  padding: 1rem;
  box-shadow: ${shadow.default};
  background-color: ${colors.button};
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
      hits: 0,
      misses: 0,
      itemsUsed: 0,
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
    let inLobby = true;
    this.saveUserStatistics('lose');
    socket.emit('leaveGame', room, inLobby);
  };

  logout = async () => {
    await this.props.logoutUser();
  };

  updateStatistics = stats => {
    this.setState({ ...stats });
  };

  saveUserStatistics = async matchResult => {
    const { hits, misses, itemsUsed, gameStatus } = this.state;
    const { token } = this.props;

    let body = {
      lastGameHits: hits + 900,
      lastGameMisses: misses + 90,
      itemsUsed: itemsUsed + 31,
    };

    if (gameStatus === 3 || gameStatus === 1) {
      try {
        await axios.post(`${url.post.ADD_STATS}?result=${matchResult}`, body, {
          withCredientials: true,
          headers: {
            Authorization: `${token}`,
          },
        });

        this.props.fetchUserData(token);
      } catch (error) {
        console.log(error);
      }
    }
  };
  render() {
    const { room, gameStatus } = this.state;
    const { children, userData } = this.props;

    if (gameStatus === 2) {
      return <Game room={room} />;
    }

    if (gameStatus === 3) {
      // this.saveUserStatistics('win');
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
            {gameStatus === 0 && (
              <SearchButton wide onClick={this.onSearchGame}>
                DOŁĄCZ DO GRY
              </SearchButton>
            )}
            {gameStatus === 1 && (
              <SearchButton wide>
                SZUKANIE GRY...<span onClick={this.onLeaveGame}>X</span>
              </SearchButton>
            )}
            {gameStatus === 2 && (
              <StyledButton wide onClick={this.onLeaveGame}>
                WYJDŹ Z GRY
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
  token: state.token,
});

const mapDispatchToProps = {
  setAuthorization,
  setAuthToken,
  clearUserData,
  logoutUser,
  fetchUserData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
