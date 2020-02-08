import React, { Component } from 'react';
import styled from 'styled-components';

// import { colors } from '../../variables/styles';


const Container = styled.div`
	width: 100%;
	height: 100%;
	text-align: center;
`;

const Headers = styled.div`
	padding: 2rem;
	font-size: 5rem;
`;

class Ranking extends Component {
	render() {
		return (
			<Container>
				<Headers>W BUDOWIE!</Headers>
			</Container>
		)
	}
}

export default Ranking;