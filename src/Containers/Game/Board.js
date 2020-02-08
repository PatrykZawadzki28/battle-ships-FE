import React from 'react';

import styled from 'styled-components';

import { colors, shadow } from '../../variables/styles';

const Wrapper = styled.div`
  display: grid;
	position: relative;
  grid-template-columns: repeat(auto-fill, 10%);
  background-color: ${colors.primaryBackgroundTransparent};
  /* border: 0.1rem solid ${colors.white}; */
  width: 34rem;
  height: 34rem;
  margin: 0 3rem;
  box-shadow: ${shadow.default};
	
`;

const NumbersInfo = styled.div`
  height: 34rem;
  position: absolute;
  top: 0;
  left: -2rem;
  font-size: 2rem;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(1);
`;

const LettersInfo = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(1);
  width: 34rem;
  position: absolute;
  align-items: center;
  justify-content: space-around;
  top: -2rem;
  font-size: 2rem;
`;

const Cell = styled.div`
  background-color: ${colors.secondaryBackground};
  font-size: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.1rem solid ${colors.white};
`;

const data = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
  [
    '1A',
    '1B',
    '1C',
    '1D',
    '1E',
    '1F',
    '1G',
    '1H',
    '1I',
    '1J',
    '2A',
    '2B',
    '2C',
    '2D',
    '2E',
    '2F',
    '2G',
    '2H',
    '2I',
    '2J',
    '3A',
    '3B',
    '3C',
    '3D',
    '3E',
    '3F',
    '3G',
    '3H',
    '3I',
    '3J',
    '4A',
    '4B',
    '4C',
    '4D',
    '4E',
    '4F',
    '4G',
    '4H',
    '4I',
    '4J',
    '5A',
    '5B',
    '5C',
    '5D',
    '5E',
    '5F',
    '5G',
    '5H',
    '5I',
    '5J',
    '6A',
    '6B',
    '6C',
    '6D',
    '6E',
    '6F',
    '6G',
    '6H',
    '6I',
    '6J',
    '7A',
    '7B',
    '7C',
    '7D',
    '7E',
    '7F',
    '7G',
    '7H',
    '7I',
    '7J',
    '8A',
    '8B',
    '8C',
    '8D',
    '8E',
    '8F',
    '8G',
    '8H',
    '8I',
    '8J',
    '9A',
    '9B',
    '9C',
    '9D',
    '9E',
    '9F',
    '9G',
    '9H',
    '9I',
    '9J',
  ],
];

const Board = () => (
  <Wrapper>
    <NumbersInfo>
      {data[0].map(el => (
        <span>{el}</span>
      ))}
    </NumbersInfo>
    <LettersInfo>
      {data[1].map(el => (
        <span>{el}</span>
      ))}
    </LettersInfo>
    {data[2].map(el => (
      <Cell>{el}</Cell>
    ))}
  </Wrapper>
);

export default Board;
