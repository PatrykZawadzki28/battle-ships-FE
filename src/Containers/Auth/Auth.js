import React, { Component } from 'react';
import styled from 'styled-components';
import Register from '../../Components/Auth/Register';
import Login from '../../Components/Auth/Login';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #1E90FF;
`;

class Auth extends Component {
	constructor() {
		super();

		this.state = {
			login: false,
			register: true,
		}
	}


	render() {
		const { login, register } = this.state;

		if (login) return <Login/>
		if (register) return <Register/>

	}
}

export default  Auth;