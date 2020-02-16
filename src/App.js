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
import Layout from './Containers/Layout/Layout';
import Login from './Containers/Auth/Login';
import Register from './Containers/Auth/Register';

const Container = styled.div`
  max-width: 100%;
  height: 100%;
  background-color: ${colors.secondaryBackground};
`;
const url = '/game';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Container>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Layout>
                <PrivateRoute exact path={`${url}/`} component={Profile} />
                <PrivateRoute path={`${url}/profil`} component={Profile} />
                <PrivateRoute path={`${url}/sklep`} component={Shop} />
                <PrivateRoute path={`${url}/ranking`} component={Ranking} />
              </Layout>
              <PrivateRoute path="*" component={Profile} />
            </Switch>
          </Container>
        </Router>
      </Provider>
    );
  }
}

export default App;
