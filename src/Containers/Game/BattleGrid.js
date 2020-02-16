import React, { Component } from 'react';
import { hoverUpdate, placeMove } from '../../utils/battleGridHelpers';
import { dictionary } from '../../utils/dictionary';

import BattleGridSquare from './BattleGridSquare';

import { Grid, GridContainer, Title, Position } from '../../styles/Game';

class BattleGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rotated: false,
      activeSpot: null,
    };
  }

  handleHover = (row, col, type) => {
    const { grid } = this.props;
    const { rotated } = this.state;
    const data = {
      grid: grid.slice(),
      rotated,
      row,
      col,
      type,
    };
    const updatedGrid = hoverUpdate(data);

    this.props.updateGrids(this.props.player, updatedGrid, 'movesGrid');
    this.setState({
      activeSpot: `${dictionary[col]}${row}`,
    });
  };

  handleExit = () => {
    this.setState({
      activeSpot: null,
    });
  };

  handleClick = (row, col) => {
    const { grid, opponent, player, activePlayer } = this.props;
    const { rotated } = this.state;

    if (!activePlayer) {
      return;
    }

    if (player !== activePlayer) {
      console.log('To nie jest twoja tura!');
      return;
    }

    const data = {
      player,
      grid: grid.slice(),
      rotated,
      row,
      col,
      opponent,
    };

    const updatedGame = placeMove(data);

    if (updatedGame) {
      this.props.updateGrids(
        this.props.player,
        updatedGame.grid,
        'movesGrid',
        updatedGame.opponent,
      );
      this.props.updateLog(updatedGame.log);
    }
  };

  handleRotate = () => {
    this.setState(prevState => {
      return {
        rotated: !prevState.rotated,
      };
    });
  };

  renderSquares = () => {
    const { grid, shipsSet } = this.props;
    return grid.map((row, i) => {
      return row.map((square, j) => {
        return (
          <BattleGridSquare
            key={`${i}${j}`}
            i={i}
            j={j}
            square={square}
            shipsSet={shipsSet}
            handleHover={this.handleHover}
            handleClick={this.handleClick}
          />
        );
      });
    });
  };

  render() {
    const { player } = this.props;
    return (
      <GridContainer>
        <Title>{player}</Title>
        <Grid onMouseLeave={this.handleExit}>{this.renderSquares()}</Grid>
        <Position>Aktywna pozycja: {this.state.activeSpot}</Position>
      </GridContainer>
    );
  }
}

export default BattleGrid;
