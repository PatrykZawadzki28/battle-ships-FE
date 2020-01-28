import React, { Component } from 'react';
import styled from 'styled-components';

import A from '../../Img/72-200x200.jpg';
import B from '../../Img/144-200x300.jpg';
import C from '../../Img/509-200x200.jpg';
import D from '../../Img/1048-200x200.jpg';

import { colors } from '../../variables/styles';


const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin: 2.6rem;
`;

const Headers = styled.div`
	padding: 2rem;
	font-size: 3rem;
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	min-width: 18rem;
	justify-content: space-between;
	flex-wrap: wrap;
	margin: 2rem;
	background-color: ${colors.secondaryBackground};
	border: .1rem solid ${colors.white};
`;

const ContentWrapper = styled.div`
	display: flex;
`;

const ItemImage = styled.h3`
	height: 13rem;
	width: 100%;
	background: ${({ img }) => img ? `url(${img})` : colors.white};
	background-size: cover;
`;

const ItemName = styled.h3`
	font-size: 1.6rem;
	padding: 2rem 1.2rem;
`;

const ItemPrice = styled.p`
	font-size: 1.6rem;
	padding-bottom: .8rem;
`;

const ItemButton = styled.button`
	font-size: 1.4rem;
	padding: 1.4rem 2rem;
	margin-bottom: 1.4rem;
  color: ${colors.white};
  background-color: ${colors.primaryBackground};
`;

const mockedData = [
	{
		img: A,
		name: 'Mega Pierd',
		price: 25,
		details: 'Wyrzuca pierdy na odległość 5km... Lepiej unikać niz próbować uciekać :) '
	}, 
	{
		img: B,
		name: 'Podwójny strzał',
		price: 50,
		details: 'Pozwala na zaatakowanie przeciwnika drugi raz podczas trwania twojej tury'
	}, 
	{
		img: C,
		name: 'Podwójny strzał',
		price: 50,
		details: 'Pozwala na zaatakowanie przeciwnika drugi raz podczas trwania twojej tury'
	}, 
	{
		img: D,
		name: 'Podwójny strzał',
		price: 50,
		details: 'Pozwala na zaatakowanie przeciwnika drugi raz podczas trwania twojej tury'
	}, 
];

class Shop extends Component {
	render() {
		return (
			<Container>
				<Headers>SKLEP</Headers>
				<ContentWrapper>
				{mockedData.map(({ img, name, price, details }) => (
					<Content>
						<ItemImage img={img}/>
						<ItemName>{name}</ItemName>
						<ItemPrice>{price}</ItemPrice> 
						<ItemButton>Kup teraz</ItemButton>
					</Content>
				))}
				</ContentWrapper>
			</Container>
		)
	}
}

export default Shop;