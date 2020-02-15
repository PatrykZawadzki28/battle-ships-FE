import React from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

import styled from 'styled-components';

import { colors, shadow } from '../../variables/styles';

import nalot from '../../Img/nalot.svg';
import bomba from '../../Img/bomba.svg';
import dodatkowyRuch from '../../Img/dodatkowy-ruch.svg';
import przemieszczenieStatku from '../../Img/przemieszczenie-statku.svg';
import skan from '../../Img/radar.svg';
import dodatkoweZycie from '../../Img/zycie.svg';

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
  min-width: 40rem;
  background: ${colors.secondaryBackground};
  padding: 1rem;
  margin-bottom: 0.5rem;
  box-shadow: ${shadow.default};
`;

const ItemImage = styled.div`
  width: 4rem;
  height: 4rem;
  background: ${({ img }) => (img ? `url(${img})` : colors.white)};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

const ItemHeader = styled.div`
  font-size: 2rem;
  padding: 0 1rem;
  background: ${colors.secondaryBackground};
`;

const Text = styled.p`
  font-size: 2rem;
  padding: 1rem;
`;

const ItemAmount = styled.div`
  font-size: 2rem;
  background: ${colors.secondaryBackground};
`;

const StyledLink = styled(Link)`
  font-size: 2rem;
  padding: 1rem;
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

const addImageToItem = name => {
  if (name === 'Nalot') return nalot;
  if (name === 'Dodatkowy ruch') return dodatkowyRuch;
  if (name === 'dodatkowe życie') return dodatkoweZycie;
  if (name === 'Przemieszczenie statku') return przemieszczenieStatku;
  if (name === 'Bomba') return bomba;
  if (name === 'Skan') return skan;

  return nalot;
};

const Inventory = ({ items }) => {
  return (
    <Container>
      <Header>Ekwipunek</Header>
      <Items>
        {items.length ? (
          items?.map(({ name, amount, description }) => {
            const img = addImageToItem(name);
            return (
              <ItemWrapper data-tip={`${description}`}>
                <ItemImage img={img} />
                <ItemHeader>{name}</ItemHeader>
                <ItemAmount>ilość: {amount}</ItemAmount>
                <ReactTooltipStyled />
              </ItemWrapper>
            );
          })
        ) : (
          <>
            <Text>Brak przedmiotów w ekwipunku</Text>
            <Text>
              przenieś mnie do
              <StyledLink to="/game/sklep">sklepu</StyledLink>
            </Text>
          </>
        )}
      </Items>
    </Container>
  );
};

export default Inventory;
