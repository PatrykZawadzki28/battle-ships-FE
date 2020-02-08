import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';

import Form from './Form';

import { colors } from '../../variables/styles';
import messages from '../../constants/messages';
import url from '../../constants/connection';

const ErrorMessageContainer = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 2rem;
  font-size: 2.5rem;
  color: ${colors.error};
  background-color: ${colors.primaryBackgroundTransparent};
`;

const SuccessMessageContainer = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 2rem;
  font-size: 2.5rem;
  color: ${colors.success};
  background-color: ${colors.primaryBackgroundTransparent};
`;
class Register extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      password: '',
      confirmPassword: '',
      errorMessage: '',
      successMessage: '',
    };
  }

  onChangeValue = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = async e => {
    e.preventDefault();
    const { name, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      this.setState({
        errorMessage: messages.PASSWORDS_NOT_MATCH,
        successMessage: '',
      });
    } else {
      try {
        const response = await axios.post(
          url.post.REGISTER,
          { name, password },
          url.headers,
        );
        console.log(response);
        if (response.status === 200) {
          this.setState({
            successMessage: 'User created!',
            errorMessage: '',
          });
        }
      } catch (error) {
        this.setState({
          errorMessage: error.response?.data?.message,
          successMessage: '',
        });
      }
    }
  };

  render() {
    const {
      name,
      password,
      confirmPassword,
      errorMessage,
      successMessage,
    } = this.state;
    const { onChangeStatus, isLoggedIn } = this.props;
    console.log(this.props.isloggedIn);

    console.log(isLoggedIn);
    if (isLoggedIn) {
      return <Redirect to="/game" />;
    }

    return (
      <>
        {errorMessage && (
          <ErrorMessageContainer>{errorMessage}</ErrorMessageContainer>
        )}
        {successMessage && (
          <SuccessMessageContainer>{successMessage}</SuccessMessageContainer>
        )}
        <Form
          name={name}
          password={password}
          confirmPassword={confirmPassword}
          onChangeValue={this.onChangeValue}
          onSubmit={this.onSubmit}
          onChangeStatus={onChangeStatus}
          withConfirmPassword
          buttonText="Zarejestruj się"
        />
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn,
});

export default connect(mapStateToProps)(Register);
