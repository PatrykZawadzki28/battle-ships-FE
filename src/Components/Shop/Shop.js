import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { connect } from 'react-redux'
import { setAuthorization, addUserData } from '../../store/actions';

import url from '../../constants/connection';
import A from '../../Img/72-200x200.jpg';
// import B from '../../Img/144-200x300.jpg';
// import C from '../../Img/509-200x200.jpg';
// import D from '../../Img/1048-200x200.jpg';

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
	background-color: ${({ extraStyling }) => extraStyling && colors.primaryBackground};
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
			items: []
		}
	}
	setBuyCoinsOption = (amount, price) => {
		this.setState({ amount, price });
	}

	addItems = async (name, price) => {
		const { userData, token } = this.props;
		console.log(userData.items);
		// const body = JSON.stringify({
		// 	name,
		// 	price
		// });

		// try {
		// 	const response = await axios.post(`${url.post.ADD_ITEM}/${userData._id}`, {
		// 		withCredientials: true,
		// 		headers: {
		// 			Authorization: `${token}`
		// 		},
		// 		body
		// 	});

		// 	if (response.status === 200) {
		// 		await this.props.addUserData(response.data.data);
		// 		console.log(userData);
		// 	}
		// } catch (error) {
		// 	console.log(error);
		// }
	}

	getAllItems = async () => {
		const { token } = this.props;
		try {
			const response = await axios.get(`${url.get.GET_ALL_ITEMS}`, {
				withCredientials: true,
				headers: {
					Authorization: `${token}`
				},
			});
			if (response.status === 200) {
				this.setState({ items: response.data.items });
			}
		} catch (error) {
			console.log(error.response);
		}
	}

	async componentDidMount() {
		await this.getAllItems();
	}

	addCoins = async (e) => {
		e.preventDefault();
		const { amount } = this.state;
		const { userData, token } = this.props;
		
		try {
			const response = await axios.post(`${url.post.ADD_COINS}?amount=${amount}&id=${userData._id}`);
			if (response.status === 200) {
				try {
					const response = await axios.get(`${url.get.GET_PLAYER_DATA}/${userData._id}`, {
						withCredientials: true,
						headers: {
							Authorization: `${token}`
						}
					});
					await this.props.addUserData(response.data.data);
					
				} catch (error) {
					console.log(error.response);
				}
			}
		} catch (error) {
			console.log(error.response);
		}
	}

	render() {
		const { items } = this.state;
		return (
			<Container>
				<Headers>SKLEP</Headers>
				<ContentWrapper>
				{items.map(({ name, price }) => (
					<Content>
						<ItemImage img={A}/>
						<ItemName>{name}</ItemName>
						<ItemPrice>{price}</ItemPrice> 
						<ItemButton onClick={() => this.addItems(name, price)}>Kup teraz</ItemButton>
					</Content>
				))}
				</ContentWrapper>
				<ContentWrapper>
				{mockedCoinsData.map(({ price, amount }) => (
					<CoinContent extraStyling={price === this.state.price ? true : false} onClick={() => this.setBuyCoinsOption(amount, price)}>
						<CoinAmountWrapper>
							<Coin />
							<CoinAmount>{amount}</CoinAmount>
						</CoinAmountWrapper>
						<CoinPrice>{price}zł</CoinPrice> 
					</CoinContent>
				))}
				</ContentWrapper>
				<BuyCoinsButton onClick={this.addCoins}>
					DODAJ ZETONY
				</BuyCoinsButton>
			</Container>
		)
	}
}

const mapStateToProps = state => ({
	isLoggedIn: state.isloggedIn,
	userData: state.userData,
	token: state.token
});

const mapDispatchToProps =  {
	setAuthorization,
	addUserData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);