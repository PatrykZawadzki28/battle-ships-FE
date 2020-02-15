import styled from 'styled-components';
import { colors, shadow } from '../variables/styles';

export const GameContainer = styled.div`
  padding: 4rem;
  background: ${colors.background};
`;

export const Title = styled.h2`
  font-size: 4rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;
  border-bottom: 0.1rem solid ${colors.white};
`;

export const ShipgridContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const GridContainer = styled.div`
  margin: 2rem;
`;

export const GridTitle = styled.h2`
  margin-bottom: 2rem;
  border-bottom: 0.1rem solid ${colors.white};
`;

export const Grid = styled.div`
  display: grid;
  grid-gap: 0;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: repeat(11, 1fr);
  height: 30rem;
  width: 30rem;
`;

export const BtnRotate = styled.button`
  margin-top: 1rem;
  padding: 1.2rem 1.6rem;
  font-size: 1.6rem;
  background: ${colors.secondaryBackground};
`;

export const Position = styled.div`
  margin: 1rem;
`;
