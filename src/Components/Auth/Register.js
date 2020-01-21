import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { colors } from '../../variables/styles';
import messages from '../../constants/messages';
import url from '../../constants/connection';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
  align-items: center;
  flex-direction: column;
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

const Header = styled.h1`
	font-size: 5rem;
  margin-bottom: 5rem;
  color: ${colors.white};
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
	constructor() {
		super();

		this.state = {
			name: '',
			password: '',
      confirmPassword: '',
      errorMessage: ''
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
    const { name, password, confirmPassword } = this.state;
    
    if (password !== confirmPassword) {
      this.setState({ errorMessage: messages.PASSWORDS_NOT_MATCH, successMessage: '' });
    } else {
      try {
        const response = await axios.post(url.post.REGISTER, {name, password}, url.headers);
        console.log(response);
        if (response.status === 200) {
          this.setState({ 
            successMessage: 'User created!', 
            errorMessage: '' 
          })
        }
      } catch(error) {
        this.setState({ errorMessage: error.response?.data?.message, successMessage: '' })
      }
    }
	}

	render() {
		const { name, password, confirmPassword, errorMessage, successMessage } = this.state;
		return (
			<Container>
        <Header>
          STATKI
        </Header>
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
        <ErrorMessageContainer>{errorMessage}</ErrorMessageContainer>
        <SuccessMessageContainer>{successMessage}</SuccessMessageContainer>
			</Container>
		);
	}
}

export default  Register;