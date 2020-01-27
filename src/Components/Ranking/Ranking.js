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

class Ranking extends Component {
	// constructor() {

	// }

	render() {
		return (
			<Container>
				<Headers>LOGO IMAGE</Headers>
				<Content>PERSONAL DATA</Content>
			</Container>
		)
	}
}

export default Ranking;