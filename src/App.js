import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import Main from './Containers/Main/Main';
import Auth from './Containers/Auth/Auth';

class App extends Component {
  render() {
    return (
			<Router>
				<div>
					<Switch>
						<Route exact path="/" component={Main} />
						<Route path="/login" component={Auth} />
					</Switch>
				</div>
  		</Router>
    );
  }
}

export default App;
