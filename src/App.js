import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react'
import Navigation from './components/Nav.component';
import DialogTaskCreate from './components/DialogTaskCreate.component';
import HealthActivity from './activity/health.activity';
import MonitorActivity from './activity/monitor.activity';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <DialogTaskCreate />
        <Container>
          <Switch path="/">
            <Route exact path='/' render={() => <HealthActivity />}/>
            <Route exact path='/health' render={() => <HealthActivity />}/>
            <Route exact path='/monitor' render={() => <MonitorActivity />}/>
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
