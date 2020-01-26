import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import styled from 'styled-components';

import { colors } from './variables/styles';

import PrivateRoute from './routes/privateRoute';
import reducers from './store/reducers';
import Main from './Containers/Main/Main';
import Auth from './Containers/Auth/Auth';

import { loadState, saveState } from './store/localStorage';

const persistedState = loadState();

const store = createStore(reducers, persistedState);

store.subscribe(() => {
	saveState(store.getState());
})


const Container = styled.div`
	max-width: 100%;
	height: 100vh;
	background-color: ${colors.secondaryBackground};
`;

class App extends Component {
  render() {
    return (
			<Provider store={store}>
				<Router>
					<Container>
						<Switch>
							<Route exact path="/" component={Auth} />
							<Route path="/login" component={Auth} />

							<PrivateRoute exact path='/game' component={Main} />
						</Switch>
					</Container>
				</Router>		
			</Provider>
    );
  }
}

export default App;
