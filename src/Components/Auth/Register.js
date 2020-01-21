import React, { Component } from 'react';
import styled from 'styled-components';

import { colors } from '../../variables/styles';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${colors.primaryBackground};
`;

const StyledForm = styled.form`
	width: 40rem;
	padding: 2rem 4rem;
	border-radius: 8rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${colors.secondaryBackground};
`;


const StyledLabel = styled.label`
	font-size: 2.5rem;
	color: ${colors.white};
`;

const StyledInput = styled.input`
	width: 70%;
	padding: .8rem;
	font-size: 1.6rem;
	background-color: ${colors.white};
`;

const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	padding: .8rem 0;
`;

const StyledButton = styled.button`
	width: 16rem;
	padding: .8rem;
	font-size: 2.2rem;
`;

class Register extends Component {
	constructor() {
		super();

		this.state = {
			name: '',
			password: '',
			confirmPassword: ''
		}
	}

	onChangeValue = (e) => {
		e.preventDefault();
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	onSubmit = (e) => {
		e.preventDefault();

	}

	render() {
		const { name, password, confirmPassword } = this.state;
		return (
			<Container>
				<StyledForm>
					<InputContainer>
						<StyledLabel htmlfor="name">name </StyledLabel>
						<StyledInput onChange={this.onChangeValue} name="name" type="text" value={name} />
					</InputContainer>
					<InputContainer>
						<StyledLabel htmlfor="password">password </StyledLabel>
						<StyledInput onChange={this.onChangeValue} name="password" type="text" value={password} />
					</InputContainer>
					<InputContainer>
						<StyledLabel htmlfor="confirmPassword">confirm password </StyledLabel>
						<StyledInput onChange={this.onChangeValue} name="confirmPassword" type="text" value={confirmPassword} />
					</InputContainer>

					<StyledButton onClick={this.onSubmit}>Zarejestruj się</StyledButton>
				</StyledForm>
			</Container>
		);
	}
}

export default  Register;