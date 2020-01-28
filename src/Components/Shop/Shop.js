import React, { Component } from 'react';
import styled from 'styled-components';

import A from '../../Img/72-200x200.jpg';
import B from '../../Img/144-200x300.jpg';
import C from '../../Img/509-200x200.jpg';
import D from '../../Img/1048-200x200.jpg';

import { colors, shadow } from '../../variables/styles';


const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	margin: 2.6rem;
	box-shadow: ${shadow.default};
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
	box-shadow: ${shadow.default};
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

const BuyCoinsButton = styled(ItemButton)`
	font-size: 2rem;
`;

const CoinAmountWrapper = styled.div`
	display: flex;
`;

const CoinContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	width: 9rem;
	height: 9rem;
	justify-content: space-around;
	flex-wrap: wrap;
	margin: 2rem;
	padding: 2rem;
	border-radius: 50%;
	box-shadow: ${shadow.default};
	background-color: ${({ extraStyling }) => extraStyling && colors.success};
`;

const Coin = styled.div`
	width: 2.4rem;
	height: 2.4rem;
	background: #FFE600 0% 0% no-repeat padding-box;
	border-radius: 1.2rem;
`;

const CoinAmount = styled.div`
	font-size: 2rem;
	padding-left: .6rem;
`;

const CoinPrice = styled.div`
	font-size: 2rem;
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

const mockedCoinsData = [
	{
		amount: 10,
		price: 5,
	}, 
	{
		amount: 20,
		price: 8,
	}, 
	{
		amount: 40,
		price: 15,
	}, 
	{
		amount: 80,
		price: 25
	}, 
];

class Shop extends Component {
	constructor() {
		super();
		this.state = {
			amount: 0,
			price: 0,
		}
	}
	setBuyCoinsOption = (amount, price) => {
		this.setState({ amount, price });
	}

	addCoins = () => {
		
	}
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
				<BuyCoinsButton onClick={this.addCoins}>
					DODAJ ZETONY
				</BuyCoinsButton>
				<ContentWrapper>
				{mockedCoinsData.map(({ price, amount }, index) => (
					<CoinContent extraStyling={price === this.state.price ? true : false} onClick={() => this.setBuyCoinsOption(amount, price)}>
						<CoinAmountWrapper>
							<Coin />
							<CoinAmount>{amount}</CoinAmount>
						</CoinAmountWrapper>
						<CoinPrice>{price}zł</CoinPrice> 
					</CoinContent>
				))}
				</ContentWrapper>
			</Container>
		)
	}
}

export default Shop;