import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducers from './store/reducers';
import Main from './Containers/Main/Main';
import Auth from './Containers/Auth/Auth';

const store = createStore(reducers);

class App extends Component {
  render() {
    return (
			<Provider store={store}>
				<Router>
					<div>
						<Switch>
							<Route exact path="/" component={Main} />
							<Route path="/login" component={Auth} />
						</Switch>
					</div>
				</Router>		
			</Provider>
    );
  }
}

export default App;
