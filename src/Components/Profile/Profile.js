import React, { Component } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

import { fetchUserData } from '../../store/actions';
// import { colors } from '../../variables/styles';

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  max-width: 90rem;
  height: 100%;
`;

const Header = styled.div`
  padding: 2rem;
  font-size: 3rem;
`;

const RightSide = styled.div`
  padding: 2rem;
  font-size: 3rem;
`;

class Profile extends Component {
  async componentDidMount() {
    const { token, fetchUserData } = this.props;

    await fetchUserData(token);
  }

  render() {
    const { userData } = this.props;
    return (
      <Container>
        <Header>PROFIL</Header>
        <RightSide>imie: {userData.name}</RightSide>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  userData: state.userData,
  token: state.token,
});

const mapDispatchToProps = {
  fetchUserData,
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
