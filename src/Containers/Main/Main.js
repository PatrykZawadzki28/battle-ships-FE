


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
	color: ${colors.white};
	width: ${({ wide }) => wide ? '20rem' : '13rem'};
	text-align: ${({ align }) => align ? align : 'center'};
	text-decoration: none;
`;

const StyledButton = styled.button`
	background-color: ${colors.primaryBackground};
	padding: 1.6rem;
	color: ${colors.white};
	width: ${({ wide }) => wide ? '20rem' : '13rem'};
	text-align: ${({ align }) => align ? align : 'center'};
	text-decoration: none;
`;

class Main extends Component {
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
    // const { endpoint } = this.state;
		// const socket = socketIOClient(endpoint);
		socket.on('roomName', ({ room, gameStatus }) => {
			console.log(room, gameStatus);
			this.setState({ room, gameStatus });
		});
		
	}
	
	
  render() {
		const { room, gameStatus } = this.state;
		const { children } = this.props;
		
		if (gameStatus === 2) {
			return (
				<StyledButton>
					W TRAKCIE GRY!
				</StyledButton>
			)
		}
		
    return (
			<>
        <Container>
					<LeftSide>
						<StyledButton align='right' wide onClick={this.logout}>Wyloguj się </StyledButton>
						<StyledLink to='/' align='right'>Profil </StyledLink>
					</LeftSide>
					<Middle>
						{room}
          	{!room && <StyledButton wide onClick={this.onSearchGame}>SEARCH GAME </StyledButton>}
						{room && <StyledButton wide onClick={this.onLeaveGame}>LEAVE GAME </StyledButton>}
					</Middle>
					<RightSide>
						<StyledLink to='/game/sklep' align='left' wide >Sklep </StyledLink>
						<StyledLink to='/game/ranking' align='left' >Ranking </StyledLink>
					</RightSide>
        </Container>
				<ChildrenContainer>
					{children}
				</ChildrenContainer>
			</>
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

export default  connect(mapStateToProps, mapDispatchToProps)(Main);