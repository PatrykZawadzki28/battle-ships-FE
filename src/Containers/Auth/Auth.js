import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from "react-router-dom";

import Register from '../../Components/Auth/Register';
import Login from '../../Components/Auth/Login';
import backgroundImage from '../../Img/thumb-1920-255067.png';

// import { colors } from '../../variables/styles';

const Container = styled.div`
	width: 100vw;
	height: 100%;
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
	constructor() {
		super();

		this.state = {
			login: false,
			register: true
		}
	}

	onChangeStatus = (status) => {
		if (status === 'login') this.setState({ login: true, register: false  });
		if (status === 'register') this.setState({ register: true, login: false });
	}

	render() {
		const { login } = this.state;

		return (
			<Container>
				<Header>
					BATTLESHIPS
				</Header>
				{login ? <Login onChangeStatus={this.onChangeStatus} onRouterHistory={this.props.history} /> : <Register onChangeStatus={this.onChangeStatus}/>}
			</Container>
		);
	}
}

export default withRouter(Auth);