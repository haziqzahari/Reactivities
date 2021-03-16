import { useEffect, useState } from 'react';
import './App.css';
import NavigationBar from './Home/NavigationBar/navigation-bar';
import ActivityDashboard from './features/activities/dashboard/ActivityDashboard';
import LoadingComponent from './features/activities/LoadingComponents';
import { useStore } from './stores/store';
import { observer } from 'mobx-react-lite';
import { Route, Switch, useLocation } from 'react-router';
import Home from './Home/Home';
import ActivityDetails from './features/activities/details/ActivityDetails';
import ActivityForm from './features/activities/form/ActivityForm';


function App() {

  const location = useLocation();

  return (
    <div>
      <NavigationBar/>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/activities'>
                  <ActivityDashboard/>
          </Route>
          <Route exact key={location.key} path={['/createActivity', '/manage/:id']} component={ActivityForm}/>
          <Route exact path='/activities/:id' component={ActivityDetails}/>
        </Switch>
      </div>
    </div>
  );
}

export default observer(App);


