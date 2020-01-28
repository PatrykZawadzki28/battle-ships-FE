


import React, { Component } from "react";
import { Link } from 'react-router-dom'
import socketIOClient from "socket.io-client";
import { connect } from 'react-redux'
import styled from 'styled-components';

import { setAuthorization } from '../../store/actions';
import { colors } from '../../variables/styles';


const endpoint = 'http://localhost:8081';
const socket = socketIOClient(endpoint);


const SharedNavigationCss = `
	display: flex;
	flex-direction: column;
	font-size: 3.6rem;
`;

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
	background-color: ${colors.primaryBackground};
	padding: 1.6rem;
	width: ${({ wide }) => wide ? '20rem' : '13rem'};
	text-align: ${({ align }) => align ? align : 'center'};
	text-decoration: none;
	margin-top: .6rem;
	box-shadow: 0 .3rem .4rem 0 rgba(0,0,0,.14), 0 .1rem .8rem 0 rgba(0,0,0,.12), 0 .3rem .3rem -.2rem rgba(0,0,0,.4);
`;

const StyledButton = styled.button`
	background-color: ${colors.primaryBackground};
	padding: 1.6rem;
	width: ${({ wide }) => wide ? '20rem' : '13rem'};
	text-align: ${({ align }) => align ? align : 'center'};
	text-decoration: none;
	margin-top: .6rem;
	box-shadow: 0 .3rem .4rem 0 rgba(0,0,0,.14), 0 .1rem .8rem 0 rgba(0,0,0,.12), 0 .3rem .3rem -.2rem rgba(0,0,0,.4);
`;

const SearchButton = styled(StyledButton)`
	margin-top: 2rem;
`;

const CoinsInfo = styled.p`
	font-size: 1.6rem;
	margin: 0 auto;
	padding: 1rem;
`;

class Layout extends Component {
  constructor() {
    super();
    this.state = {
			room: '',
			gameStatus: 0
    };
	}
	
	onSearchGame = () => {
		socket.emit('searchGame');
	}

	onLeaveGame = () => {
		const { room } = this.state;
		socket.emit('leaveGame', room);
	}

	logout = () => {
		this.props.setAuthorization(false);
	}

  componentDidMount() {
		socket.on('roomName', ({ room, gameStatus }) => {
			this.setState({ room, gameStatus });
		});
	}
	
	
  render() {
		const { room, gameStatus } = this.state;
		const { children, userData } = this.props;
		
		if (gameStatus === 2) {
			return (
				<StyledButton>
					W TRAKCIE GRY!
				</StyledButton>
			)
		}

    return (
			<MainWrapper>
        <Container>
					<LeftSide>
						<StyledButton align='right' wide onClick={this.logout}>Wyloguj się </StyledButton>
						<StyledLink to='/game/profil' align='right'>Profil </StyledLink>
					</LeftSide>
					<Middle>
						{room}
          	{!room && <SearchButton wide onClick={this.onSearchGame}>SEARCH GAME </SearchButton>}
						{room && <StyledButton wide onClick={this.onLeaveGame}>LEAVE GAME </StyledButton>}
						<CoinsInfo>ZETONY: {userData.coins}</CoinsInfo>
					</Middle>
					<RightSide>
						<StyledLink to='/game/sklep' align='left' wide >Sklep </StyledLink>
						<StyledLink to='/game/ranking' align='left' >Ranking </StyledLink>
					</RightSide>
        </Container>
				<ChildrenContainer>
					{children}
				</ChildrenContainer>
			</MainWrapper>
    );
  }
}


const mapStateToProps = state => ({
	isLoggedIn: state.isloggedIn,
	userData: state.userData
});

const mapDispatchToProps =  {
	setAuthorization
};

export default  connect(mapStateToProps, mapDispatchToProps)(Layout);