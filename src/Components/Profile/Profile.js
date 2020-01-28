import React, { Component } from 'react';
import styled from 'styled-components';

import { colors } from '../../variables/styles';


const Container = styled.div`
	display: flex;
	align-items: center;
	max-width: 90rem;
	height: 100%;
`;

const LeftSide = styled.div`
	padding: 2rem;
	font-size: 3rem;
`;

const RightSide = styled.div`
	padding: 2rem;
	font-size: 3rem;
`;

class Profile extends Component {
	render() {
		return (
			<Container>
				<LeftSide>PROFIL</LeftSide>
				<RightSide>W BUDOWIE</RightSide>
			</Container>
		)
	}
}

export default Profile;