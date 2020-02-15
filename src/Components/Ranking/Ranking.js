import React, { Component } from 'react';
import { connect } from 'react-redux';

import axios from 'axios';

import styled from 'styled-components';

import { fetchUserData } from '../../store/actions';

import url from '../../constants/connection';

import { colors, shadow } from '../../variables/styles';

const Container = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`;

const Headers = styled.div`
  padding: 2rem;
  font-size: 5rem;
`;

const ProfilContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  height: 100rem;
  overflow-y: auto;
`;

const Profil = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  width: 50%;
  margin-bottom: 0.5rem;
  box-shadow: ${shadow.default};
  background: ${colors.secondaryBackground};
`;

const ProfilImage = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 2rem;
`;

const ProfilData = styled.p`
  font-size: 2rem;
`;

class Ranking extends Component {
  constructor() {
    super();

    this.state = {
      players: [],
    };
  }

  getAllPlayersStats = async token => {
    try {
      const response = await axios.get(`${url.get.GET_STATS}`, {
        withCredientials: true,
        headers: {
          Authorization: `${token}`,
        },
      });

      console.log(response.data);

      this.setState({ players: response.data });
    } catch (error) {
      console.log(error.response);
    }
  };

  async componentDidMount() {
    const { token, userData } = this.props;

    await this.getAllPlayersStats(token);
  }

  render() {
    const { players } = this.state;
    return (
      <Container>
        <Headers>Ranking</Headers>
        <ProfilContainer>
          {players.map(({ name, statistics }, index) => (
            <Profil key={`${index}${name}`}>
              <ProfilData>.{index + 1}</ProfilData>
              <ProfilImage
                src={`https://robohash.org/${name}.png`}
              ></ProfilImage>
              <ProfilData>imie: {name}</ProfilData>
              <ProfilData>wygrane: {statistics.wins}</ProfilData>
              <ProfilData>przegrane: {statistics.loses}</ProfilData>
              <ProfilData>punkty: {statistics.points}</ProfilData>
            </Profil>
          ))}
        </ProfilContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  token: state.token,
  userData: state.userData,
});

const mapDispatchToProps = {
  fetchUserData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Ranking);
