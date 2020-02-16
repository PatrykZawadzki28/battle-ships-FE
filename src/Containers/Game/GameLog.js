import React from 'react';

import {
  GamelogWrapper,
  GamelogContainer,
  PlayerTurn,
  TurnBlock,
  Log,
} from '../../styles/GameLog';

const GameLog = props => {
  const renderTurn = () => {
    if (!props.allShipsSet) {
      return 'Umieść swoje statki...';
    } else if (props.gameStarting) {
      return 'Gra rozpoczyna się...';
    } else if (props.gameOver) {
      return `${props.winner} wygrywa!!`;
    }
    return `tura gracza ${props.activePlayer}`;
  };

  return (
    <GamelogWrapper>
      <PlayerTurn>{renderTurn()}</PlayerTurn>
      <GamelogContainer>
        {props.logs.map((log, i) => {
          return (
            <TurnBlock key={i}>
              {log.turn}
              {log.messages.map((msg, j) => {
                return <Log key={j}>{msg}</Log>;
              })}
            </TurnBlock>
          );
        })}
      </GamelogContainer>
    </GamelogWrapper>
  );
};

export default GameLog;
