import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { connect } from 'react-redux'

import { colors } from '../../variables/styles';
import url from '../../constants/connection';

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
	width: 100%;
  padding: .8rem 0;
  display: flex;
	flex-direction: column;
	align-items: center;
`;

const StyledButton = styled.button`
  width: 16rem;
  margin: 1.2rem 0;
	padding: .8rem;
  font-size: 2rem;
  border-radius: 3rem;
  color: ${colors.white};
  background-color: ${colors.primaryBackground};
`;

const ErrorMessageContainer = styled.div`
  font-size: 2.5rem;
	color: ${colors.error};
`;

const SuccessMessageContainer = styled.div`
  font-size: 2.5rem;
	color: ${colors.success};
`;
class Register extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			password: '',
			errorMessage: '',
			successMessage: ''
		}
	}

	onChangeValue = (e) => {
		e.preventDefault();
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	onSubmit = async (e) => {
		e.preventDefault();
		const { name, password } = this.state;
		try {
			const response = await axios.post(url.post.LOGIN, { name, password }, url.headers);
			if (response.status === 200) {
				this.setState({ 
					errorMessage: '' 
				})
				this.props.onRouterHistory.push('/');		
			}
		} catch(error) {
			this.setState({ errorMessage: error.response?.data?.message, successMessage: '' })
		}
  }

	render() {
		const { name, password, errorMessage, successMessage } = this.state;
		return (
      <>
				<StyledForm>
					<InputContainer>
						<StyledLabel htmlfor="name">name </StyledLabel>
						<StyledInput onChange={this.onChangeValue} name="name" type="text" value={name} />
					</InputContainer>
					<InputContainer>
						<StyledLabel htmlfor="password">password </StyledLabel>
						<StyledInput onChange={this.onChangeValue} name="password" type="text" value={password} />
					</InputContainer>
					<StyledButton onClick={this.onSubmit}>zaloguj się</StyledButton>
				</StyledForm>
        <ErrorMessageContainer>{errorMessage}</ErrorMessageContainer>
        <SuccessMessageContainer>{successMessage}</SuccessMessageContainer>
    	</>
		);
	}
}

export default  Register;