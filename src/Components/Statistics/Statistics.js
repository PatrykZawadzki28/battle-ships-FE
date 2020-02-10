import React from 'react';

import styled from 'styled-components';

import { colors, shadow } from '../../variables/styles';

const Container = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`;

const Header = styled.div`
  padding: 2rem;
  font-size: 3rem;
`;

const StatsContainer = styled.div`
  padding: 2rem;
  font-size: 5rem;
`;

const StatsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 40rem;
  background: ${colors.secondaryBackground};
  padding: 1rem;
  box-shadow: ${shadow.default};
`;

const Stats = styled.div`
  font-size: 2rem;
  background: ${colors.secondaryBackground};
`;

const StatsDictionary = {
  gamesPlayed: 'rozegranye gry',
  wins: 'wygrane',
  loses: 'przegrane',
  hits: 'trafienia',
  misses: 'pudła',
  totalAccuracy: 'celność',
  lastGameHits: 'trafienia z ostatniej gry',
  lastGameMisses: 'pudła z ostatniej gry',
  itemsUsed: 'uzycia przedmiotów',
  accuracy: 'celność z ostatniej gry',
};

const Statistics = ({ items }) => {
  console.log(items);
  return (
    <Container>
      <Header>Statystyki</Header>
      <StatsContainer>
        {Object.entries(items).map(([key, element]) => (
          <StatsWrapper>
            <Stats>{StatsDictionary[key]}:</Stats>
            <Stats>{element}</Stats>
          </StatsWrapper>
        ))}
      </StatsContainer>
    </Container>
  );
};

export default Statistics;
