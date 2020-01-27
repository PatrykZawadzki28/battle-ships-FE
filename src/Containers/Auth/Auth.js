import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from "react-router-dom";

import Register from '../../Components/Auth/Register';
import Login from '../../Components/Auth/Login';
import backgroundImage from '../../Img/thumb-1920-255067.png';

import { colors } from '../../variables/styles';

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
  color: ${colors.white};
`;

const Choosers = styled.div`
	display: flex;
	flex-direction: row;
`;

const Chooser = styled.p`
	font-size: 2rem;
	margin: 1rem 2rem;
	cursor: pointer;
	color: ${colors.white};
`;
class Auth extends Component {
	constructor() {
		super();

		this.state = {
			login: false,
			register: true
		}
	}


	render() {
		const { login } = this.state;

		const onChangeStatus = (status) => {
			if (status === 'login') this.setState({ login: true, register: false  });
			if (status === 'register') this.setState({ register: true, login: false });
		}

		return (
			<Container>
				<Header>
					BATTLESHIPS
				</Header>
				<Choosers>
					<Chooser onClick={() => onChangeStatus('login')}>login</Chooser>
					<Chooser onClick={() => onChangeStatus('register')}>register</Chooser>
				</Choosers>
				{login ? <Login onRouterHistory={this.props.history} onChangeStatus={onChangeStatus} /> : <Register onChangeStatus={onChangeStatus} />}
			</Container>
		);
	}
}

export default withRouter(Auth);