import React, { Component } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

import Inventory from '../Inventory/Inventory';

import { fetchUserData } from '../../store/actions';
import { colors } from '../../variables/styles';

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: 100%;
  margin: 6rem 2.6rem;
`;

const ProfileWrapper = styled.div`
  margin: 2rem;
`;

const ProfilName = styled.h2`
  font-size: 3rem;
  text-align: center;
  padding: 2rem 0;
`;

const ProfilImage = styled.img`
  height: 12rem;
  width: 12rem;
  border-radius: 6rem;
  background: ${colors.primaryBackground};
`;

// const Inventory = styled.div`
//   height: 12rem;
//   width: 100%;
//   font-size: 3rem;
//   text-align: center;
//   margin-top: 5.5rem;
//   background: ${colors.primaryBackground};
// `;

const Statistics = styled.div`
  height: 12rem;
  width: 100%;
  font-size: 3rem;
  text-align: center;
  margin-top: 5.5rem;
  background: ${colors.primaryBackground};
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
        <Inventory items={userData.items} />
        <ProfileWrapper>
          <ProfilImage src={`https://robohash.org/${userData.name}.png`} />
          <ProfilName>{userData.name}</ProfilName>
        </ProfileWrapper>

        <Statistics>Statistics</Statistics>
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
