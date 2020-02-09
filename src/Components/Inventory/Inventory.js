import React, { Component } from 'react';
import styled from 'styled-components';

import { colors } from '../../variables/styles';

const Container = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`;

const Header = styled.div`
  padding: 2rem;
  font-size: 5rem;
`;

const Items = styled.div`
  padding: 2rem;
  font-size: 5rem;
`;

const ItemWrapper = styled.div`
  display: flex;
`;

const ItemImage = styled.div`
  width: 2rem;
  height: 2rem;
  background: ${colors.white};
`;

const ItemHeader = styled.div`
  font-size: 2rem;
`;

const ItemAmount = styled.div`
  font-size: 2rem;
`;

const ItemDescripction = styled.div`
  font-size: 1.6rem;
`;

const Inventory = ({ items }) => {
  console.log(items);
  return (
    <Container>
      <Header>Ekwipunek</Header>
      <Items>
        {items?.map(({ name, price, amount }) => (
          <ItemWrapper>
            <ItemImage />
            <ItemHeader>{name}</ItemHeader>
            <ItemAmount>ilość: {amount}</ItemAmount>
            <ItemDescripction>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </ItemDescripction>
          </ItemWrapper>
        ))}
      </Items>
    </Container>
  );
};

export default Inventory;
