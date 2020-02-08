import React, { Component } from 'react';

import styled from 'styled-components';

// import { colors, shadow } from '../../variables/styles';

const Wrapper = styled.div`
  position: fixed;
  z-index: 9999;
  bottom: 0;
  width: 50%;
`;

const History = styled.div``;

const StyledInput = styled.div``;

class Chat extends Component {
  render() {
    const { textHistory, text } = this.props;
    return (
      <Wrapper>
        <History>
          {textHistory.map(el => (
            <p>{el}</p>
          ))}
        </History>
        <StyledInput value={text} />
      </Wrapper>
    );
  }
}

export default Chat;
