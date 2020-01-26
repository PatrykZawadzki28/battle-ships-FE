


import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import { connect } from 'react-redux'
import styled from 'styled-components';

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
	max-width: 120rem;
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

const StyledButton = styled.button`
	background-color: ${colors.primaryBackground};
	padding: 1.6rem;
	color: ${colors.white};
	text-align: center;
	${({ wide }) => wide ? 'width: 18rem' : 'width: 15rem'};
`;

class Main extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
			room: ''
    };
	}
	

  componentDidMount() {
    // const { endpoint } = this.state;
		// const socket = socketIOClient(endpoint);
		socket.on('roomName', (data) => {
			this.setState({ room: data });
		});
	}
	
  render() {
		const { room } = this.state;
    return (
        <Container>
					<LeftSide>
						<StyledButton wide={true} onClick={this.onSearchGame}>Wyloguj się </StyledButton>
						<StyledButton onClick={this.onSearchGame}>Profil </StyledButton>
					</LeftSide>
					<Middle>
          	<StyledButton onClick={this.onSearchGame}>SEARCH GAME </StyledButton>
					</Middle>
					<RightSide>
						<StyledButton wide={true}  onClick={this.onSearchGame}>Sklep </StyledButton>
						<StyledButton onClick={this.onSearchGame}>Ranking </StyledButton>
					</RightSide>
					{room}
        </Container>
    );
  }
}


const mapStateToProps = state => ({
	isLoggedIn: state.isloggedIn,
	userData: state.userData
});

export default  connect(mapStateToProps)(Main);