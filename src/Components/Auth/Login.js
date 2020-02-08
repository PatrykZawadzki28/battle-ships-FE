import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { connect } from 'react-redux';
import {
  setAuthorization,
  fetchUserData,
  setAuthToken,
} from '../../store/actions';

import Form from './Form';

import { colors } from '../../variables/styles';
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

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      password: '',
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
    const { name, password } = this.state;
    try {
      const response = await axios.post(
        url.post.LOGIN,
        { name, password },
        url.headers,
      );
      if (response.status === 200) {
        this.setState({
          errorMessage: '',
        });
        await this.props.fetchUserData(response.data.data);
        await this.props.setAuthToken(response.data.token.token);
        await this.props.setAuthorization(true);
        await this.props.onRouterHistory.push('/game');
      }
    } catch (error) {
      this.setState({
        errorMessage: error.response?.data?.message,
        successMessage: '',
      });
    }
  };

  render() {
    const { name, password, errorMessage, successMessage } = this.state;
    const { isLoggedIn } = this.props;

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
          onChangeValue={this.onChangeValue}
          onSubmit={this.onSubmit}
          buttonText="zaloguj się"
        />
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.isloggedIn,
});

const mapDispatchToProps = {
  setAuthorization,
  fetchUserData,
  setAuthToken,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
