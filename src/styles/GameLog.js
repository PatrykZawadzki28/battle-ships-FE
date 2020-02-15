import styled from 'styled-components';
import { colors, shadow } from '../variables/styles';

export const GamelogWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GamelogContainer = styled.div`
  margin: 2rem;
  padding: 3rem;
  height: 30rem;
  width: 40rem;
  background-color: ${colors.secondaryBackground};
  box-shadow: ${shadow.default};
  overflow-y: scroll;
`;

export const PlayerTurn = styled.h2`
  font-size: 3rem;
  display: flex;
  align-self: center;
  justify-content: center;
  margin: 1em;
`;

export const TurnBlock = styled.div`
  margin-top: 2rem;
  border-bottom: 0.1rem solid ${colors.white};
  background-color: ${colors.secondaryBackground};
`;

export const Log = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 2rem;
  padding: 0.5rem;
  border-bottom: 0.1rem solid rgb(225, 225, 225);
  background-color: ${colors.secondaryBackground};
`;
