import React, { Component } from 'react';
import styled from 'styled-components';

import { colors } from '../../variables/styles';


const Container = styled.div`
	max-width: 90rem;
	height: 100%;
`;

const Headers = styled.div`
	padding: 2rem;
	font-size: 3rem;
`;

const Content = styled.div`
	padding: 2rem;
	font-size: 3rem;
`;

class Dashboard extends Component {
	render() {
		return (
			<Container>
				<Headers>DASHBOARD</Headers>
				<Content>PERSONAL DATA</Content>
			</Container>
		)
	}
}

export default Dashboard;