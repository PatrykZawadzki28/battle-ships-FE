import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';

import styled from 'styled-components';

import { colors } from '../../variables/styles';

const Container = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`;

const Header = styled.div`
  padding: 2rem;
  font-size: 3rem;
`;

const Items = styled.div`
  padding: 2rem;
  font-size: 5rem;
`;

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ItemImage = styled.div`
  width: 4rem;
  height: 4rem;
  background: ${colors.white};
`;

const ItemHeader = styled.div`
  font-size: 2rem;
  padding: 0 1rem;
`;

const ItemAmount = styled.div`
  font-size: 2rem;
`;
const ReactTooltipStyled = styled(ReactTooltip)`
  &.type-dark.place-top {
    background: ${colors.secondaryBackground};
    padding: 0.8rem 1rem;
    cursor: pointer;

    &:after {
      border-top-color: ${colors.success};
    }
  }
`;

const Inventory = ({ items }) => {
  return (
    <Container>
      <Header>Ekwipunek</Header>
      <Items>
        {items?.map(({ name, amount, description }) => (
          <ItemWrapper data-tip={`${description}`}>
            <ItemImage />
            <ItemHeader>{name}</ItemHeader>
            <ItemAmount>ilość: {amount}</ItemAmount>
            <ReactTooltipStyled />
          </ItemWrapper>
        ))}
      </Items>
    </Container>
  );
};

export default Inventory;
