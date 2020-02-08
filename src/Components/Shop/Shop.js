import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { connect } from 'react-redux';

import PaymentModal from '../Modal/PaymentModal';
import { setAuthorization, fetchUserData } from '../../store/actions';

import url from '../../constants/connection';
import A from '../../Img/72-200x200.jpg';

import { colors, shadow } from '../../variables/styles';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 2.6rem;
  /* box-shadow: ${shadow.default};
  background: ${colors.secondaryBackground}; */
`;

const Header = styled.div`
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
  background: ${({ img }) => (img ? `url(${img})` : colors.white)};
  background-size: cover;
`;

const ItemName = styled.h3`
  font-size: 1.6rem;
  padding: 2rem 1.2rem;
`;

const ItemPrice = styled.p`
  font-size: 1.6rem;
  padding-bottom: 0.8rem;
`;

const ItemButton = styled.button`
  font-size: 1.4rem;
  padding: 1.4rem 2rem;
  margin-bottom: 1.4rem;
  background-color: ${colors.button};
`;

const BuyButton = styled.button`
  font-size: 1.4rem;
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 5%;
  transform: translateY(-50%);
  height: 10rem;
  width: 10rem;
  padding: 2rem;
  border-radius: 5rem;
  align-self: center;
  margin-bottom: 1.4rem;
  background-color: ${colors.button};
`;

class Shop extends Component {
  constructor() {
    super();
    this.state = {
      amount: 0,
      price: 0,
      items: [],
      modalIsOpen: false,
    };
  }

  setBuyCoinsOption = (amount, price) => {
    this.setState({ amount, price });
  };

  addItems = async (name, price) => {
    const { userData, token } = this.props;
    console.log(userData.items);

    try {
      await axios.post(
        `${url.post.ADD_ITEM}/${userData._id}`,
        { name, price },
        {
          withCredientials: true,
          headers: {
            Authorization: `${token}`,
          },
        },
      );

      await this.props.fetchUserData(token);
    } catch (error) {
      console.log(error);
    }
  };

  getAllItems = async () => {
    const { token } = this.props;
    try {
      const response = await axios.get(`${url.get.GET_ALL_ITEMS}`, {
        withCredientials: true,
        headers: {
          Authorization: `${token}`,
        },
      });

      this.setState({ items: response.data.items });
    } catch (error) {
      console.log(error.response);
    }
  };

  async componentDidMount() {
    await this.getAllItems();
  }

  addCoins = async e => {
    e.preventDefault();
    const { amount } = this.state;
    const { userData, token } = this.props;

    if (amount !== 0) {
      try {
        await axios.post(
          `${url.post.ADD_COINS}?amount=${amount}&id=${userData._id}`,
          {
            withCredientials: true,
            headers: {
              Authorization: `${token}`,
            },
          },
        );

        this.props.fetchUserData(token);
      } catch (error) {
        console.log(error);
      }
      this.closeModal();
      this.setState({ amount: 0, price: 0 });
    }
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    const { items, modalIsOpen } = this.state;
    return (
      <Container>
        <Header>SKLEP</Header>
        <ContentWrapper>
          {items.map(({ name, price }, index) => (
            <Content key={index}>
              <ItemImage img={A} />
              <ItemName>{name}</ItemName>
              <ItemPrice>{price}</ItemPrice>
              <ItemButton onClick={() => this.addItems(name, price)}>
                Kup teraz
              </ItemButton>
            </Content>
          ))}
          <BuyButton onClick={this.openModal}>Kup zetony</BuyButton>
        </ContentWrapper>
        <PaymentModal
          addCoins={this.addCoins}
          modalIsOpen={modalIsOpen}
          setBuyCoinsOption={this.setBuyCoinsOption}
          closeModal={this.closeModal}
          currPrice={this.state.price}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.isloggedIn,
  userData: state.userData,
  token: state.token,
});

const mapDispatchToProps = {
  setAuthorization,
  fetchUserData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
