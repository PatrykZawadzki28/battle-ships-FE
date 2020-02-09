import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

import { colors, shadow } from '../../variables/styles';

const ItemButton = styled.button`
  font-size: 1.4rem;
  padding: 1.4rem 2rem;
  margin-bottom: 1.4rem;
  background-color: ${colors.button};
`;

const CoinAmountWrapper = styled.div`
  display: flex;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
  cursor: pointer;
  box-shadow: ${shadow.default};
  background-color: ${({ extraStyling }) =>
    extraStyling && colors.secondaryBackground};
  color: ${({ extraStyling }) => extraStyling && colors.secondaryBackground};
`;

const Coin = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  background: #ffe600 0% 0% no-repeat padding-box;
  border-radius: 1.2rem;
`;

const CoinAmount = styled.div`
  font-size: 2rem;
  padding-left: 0.6rem;
  color: ${colors.white};
`;

const CoinPrice = styled.div`
  font-size: 2rem;
  color: ${colors.white};
`;

const BuyCoinsButton = styled(ItemButton)`
  font-size: 2rem;
`;

const Header = styled.span`
  font-size: 2rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
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
    price: 25,
  },
];

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: `${colors.background}`,
    textAlign: 'center',
    'box-shadow': `${shadow.default}`,
  },
};

class PaymentModal extends React.Component {
  render() {
    const {
      modalIsOpen,
      closeModal,
      setBuyCoinsOption,
      currPrice,
      addCoins,
    } = this.props;
    return (
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <ContentWrapper>
            <Header>Dostępne opcje: </Header>
            <Content>
              {mockedCoinsData.map(({ price, amount }, index) => (
                <CoinContent
                  key={index}
                  extraStyling={price === currPrice ? true : false}
                  onClick={() => setBuyCoinsOption(amount, price)}
                >
                  <CoinAmountWrapper>
                    <Coin />
                    <CoinAmount>{amount}</CoinAmount>
                  </CoinAmountWrapper>
                  <CoinPrice>{price}zł</CoinPrice>
                </CoinContent>
              ))}
            </Content>
            <BuyCoinsButton onClick={addCoins}>Kup</BuyCoinsButton>
          </ContentWrapper>
        </Modal>
      </div>
    );
  }
}

export default PaymentModal;
