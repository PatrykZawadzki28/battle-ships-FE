import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #1E90FF;
`;

class Login extends Component {
	constructor() {
		super();

		this.state = {
			name: 'Eleonora',
			password: '',
		}
	}


	render() {
		const { name, password } = this.state;
		if (name) return <Container>Login: ${name}</Container>
	}
}

export default  Login;