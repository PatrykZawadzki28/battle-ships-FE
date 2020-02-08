import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import styled from 'styled-components';

import store from './store';
import Shop from './Components/Shop/Shop';
import Ranking from './Components/Ranking/Ranking';

import { colors } from './variables/styles';
import PrivateRoute from './routes/privateRoute';

import Profile from './Components/Profile/Profile';
import Dashboard from './Components/Dashboard/Dashboard';
import Layout from './Containers/Layout/Layout';
import Login from './Containers/Auth/Login';
import Register from './Containers/Auth/Register';

import Game from './Containers/Game/Game';

const Container = styled.div`
  max-width: 100%;
  height: 100%;
  background-color: ${colors.secondaryBackground};
`;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Container>
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route
                path="/game"
                render={({ match: { url } }) => (
                  <>
                    <Layout>
                      <PrivateRoute
                        exact
                        path={`${url}/`}
                        component={Dashboard}
                      />
                      <PrivateRoute path={`${url}/board`} component={Game} />
                      <PrivateRoute
                        path={`${url}/profil`}
                        component={Profile}
                      />
                      <PrivateRoute path={`${url}/sklep`} component={Shop} />
                      <PrivateRoute
                        path={`${url}/ranking`}
                        component={Ranking}
                      />
                    </Layout>
                  </>
                )}
              />
            </Switch>
          </Container>
        </Router>
      </Provider>
    );
  }
}

export default App;
