import React from 'react';
import styled from 'styled-components';

import { colors, shadow } from '../../variables/styles';

const StyledForm = styled.form`
	width: 40rem;
	padding: 2rem 4rem;
	border-radius: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${colors.primaryBackgroundTransparent};
	box-shadow: ${shadow.default};
`;

const Header = styled.h2`
	font-size: 3rem;
`;

const StyledLabel = styled.label`
	font-size: 2rem;
	padding: .6rem 0;
`;

const StyledInput = styled.input`
	width: 70%;
	padding: .8rem;
	font-size: 1.6rem;
	border: .1rem solid ${colors.white};
	background-color: transparent;
`;

const InputContainer = styled.div`
	width: 100%;
  padding: .8rem 0;
  display: flex;
	flex-direction: column;
	align-items: center;
`;

const StyledButton = styled.button`
  margin: 2rem 0 1.2rem 0;
	padding: 1.4rem 2rem;
  font-size: 2rem;
  background-color: ${colors.primaryBackground};
`;

const OtherOptions = styled.div`
	display: flex;
	align-items: center;
	font-size: 1.6rem;
	padding: 1rem .6rem;
`;

const FormLinkTo = styled.p`
	font-size: 1.6rem;
	color: ${colors.success};
	padding: 1rem .6rem;
	cursor: pointer;
`;

const Form = ({ name, password, confirmPassword, onSubmit, onChangeValue, buttonText, withConfirmPassword = false, onChangeStatus }) => (
	<StyledForm>
		<Header>DOŁACZ DO GRY</Header>
		<InputContainer>
			<StyledLabel htmlfor="name">Imię </StyledLabel>
			<StyledInput onChange={onChangeValue} name="name" type="text" value={name} />
		</InputContainer>
		<InputContainer>
			<StyledLabel htmlfor="password">Hasło </StyledLabel>
			<StyledInput onChange={onChangeValue} name="password" type="password" value={password} />
		</InputContainer>
		{withConfirmPassword && 	
		<InputContainer>
			<StyledLabel htmlfor="confirmPassword">Potwierdź hasło </StyledLabel>
			<StyledInput onChange={onChangeValue} name="confirmPassword" type="password" value={confirmPassword} />
		</InputContainer>}
		<StyledButton onClick={onSubmit}>{buttonText}</StyledButton>
		{!withConfirmPassword ? 
			<OtherOptions>Nie masz konta? <FormLinkTo onClick={() => onChangeStatus('register')}>zarejestruj się!</FormLinkTo></OtherOptions> :
			<OtherOptions>Masz juz konto? <FormLinkTo onClick={() => onChangeStatus('login')}>zaloguj się!</FormLinkTo></OtherOptions>
		}
	</StyledForm>
);

export default Form;