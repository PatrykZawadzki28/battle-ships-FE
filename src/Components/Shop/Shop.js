import React, { Component } from 'react';
import styled from 'styled-components';

import { colors } from '../../variables/styles';


const Container = styled.div`
	max-width: 90rem;
	height: 100%;
	background-color: ${colors.secondaryBackground};
`;

const Headers = styled.div`
	padding: 2rem;
	font-size: 3rem;
`;

const Content = styled.div`
	padding: 2rem;
	font-size: 3rem;
`;


const mockedData = [
	{
		name: 'Mega Pierd',
		price: 25,
		details: 'Wyrzuca pierdy na odległość 5km... Lepiej unikać niz próbować uciekać :) '
	}, 
	{
		name: 'Podwójny strzał',
		price: 50,
		details: 'Pozwala na zaatakowanie przeciwnika drugi raz podczas trwania twojej tury'
	}, 
	{
		name: 'Podwójny strzał',
		price: 50,
		details: 'Pozwala na zaatakowanie przeciwnika drugi raz podczas trwania twojej tury'
	}, 
	{
		name: 'Podwójny strzał',
		price: 50,
		details: 'Pozwala na zaatakowanie przeciwnika drugi raz podczas trwania twojej tury'
	}, 
];

class Shop extends Component {
	// constructor() {
	// 	super()
	// }

	render() {
		return (
			<Container>
				<Headers>SKLEP</Headers>
				{mockedData.map(({ name, price, details }) => (
					<Content>
						{name}, {price}, {details}
						<button>Kup teraz</button>
					</Content>
				))}
			</Container>
		)
	}
}

export default Shop;