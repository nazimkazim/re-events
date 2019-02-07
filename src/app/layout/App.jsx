import React, { Component } from 'react';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailedPage';
import EventForm from '../../features/event/EventForm/EventForm';
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import UserDetailedPage from '../../features/user/UserDetailed/UserDetailedPage';
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard';
import HomePage from '../../features/home/HomePage';
import TestPage from '../../features/TestComponent/TestComponent';
import ModalManager from '../../features/modals/ModalManager';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ModalManager />
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
        <Route
          path="/(.+)"
          render={() => (
            <React.Fragment>
              <NavBar />
              <Container className="main">
                <Switch>
                  <Route exact path="/events" component={EventDashboard} />
                  <Route
                    exact
                    path="/event/:id"
                    component={EventDetailedPage}
                  />
                  <Route exact path="/tests" component={TestPage} />
                  <Route exact path="/manage/:id" component={EventForm} />
                  <Route exact path="/people" component={PeopleDashboard} />
                  <Route
                    exact
                    path="/profile/:id"
                    component={UserDetailedPage}
                  />
                  <Route path="/settings" component={SettingsDashboard} />
                  <Route exact path="/createEvent" component={EventForm} />
                </Switch>
              </Container>
            </React.Fragment>
          )}
        />
      </React.Fragment>
    );
  }
}

export default App;
