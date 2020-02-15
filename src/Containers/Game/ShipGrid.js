import React, { Component } from 'react';
import { placeShip, hoverUpdate } from '../../utils/shipGridHelpers';

import ShipGridSquare from './ShipGridSquare';
import '../../styles/Grid.css';

import { Grid, GridTitle, GridContainer, BtnRotate } from '../../styles/Game';

export default class ShipGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rotated: false,
      activeSpot: null,
    };
  }

  handleHover = (row, col, type) => {
    const { grid, ships, currentShip } = this.props;
    const { rotated } = this.state;
    const data = {
      grid: grid.slice(),
      rotated,
      row,
      col,
      type,
      ships,
      currentShip,
    };
    const updatedGrid = hoverUpdate(data);
    this.props.updateGrids(this.props.player, updatedGrid, 'shipsGrid');
  };

  handleClick = (row, col) => {
    const { grid, ships, currentShip } = this.props;
    const { rotated } = this.state;
    const data = {
      grid: grid.slice(),
      rotated,
      row,
      col,
      ships,
      currentShip,
    };
    const gameUpdate = placeShip(data);
    if (gameUpdate) {
      this.props.updateGrids(this.props.player, gameUpdate.grid, 'shipsGrid');
      this.props.updateShips(this.props.player, gameUpdate.ships, 'shipsGrid');
    }
  };

  handleRotate = () => {
    this.setState(prevState => {
      return {
        rotated: !prevState.rotated,
      };
    });
  };

  renderSquares() {
    const { activePlayer, player, grid, shipsSet, gameOver } = this.props;
    if (player === activePlayer || gameOver) {
      return grid.map((row, i) => {
        return row.map((square, j) => {
          return (
            <ShipGridSquare
              key={`${i}${j}`}
              i={i}
              j={j}
              shipsSet={shipsSet}
              square={square}
              handleHover={this.handleHover}
              handleClick={this.handleClick}
            />
          );
        });
      });
    } else {
      return null;
    }
  }

  renderPlacement() {
    const { activePlayer, player, ships, currentShip, shipsSet } = this.props;
    if (player === activePlayer && !shipsSet) {
      return (
        <p className="placement-text">
          Now placing: {ships[currentShip].type} - size:{' '}
          {ships[currentShip].size}
        </p>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <GridContainer>
        <GridTitle> Ship Grid </GridTitle>
        <Grid>{this.renderSquares()}</Grid>
        {this.renderPlacement()}
        <BtnRotate onClick={this.handleRotate}>Rotate direction</BtnRotate>
      </GridContainer>
    );
  }
}
