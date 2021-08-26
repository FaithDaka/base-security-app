import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Auth from './pages/Auth';
import GuardsList from './pages/Guards/GuardsList';
import AddGuard from './pages/Guards/AddGuard';
import UpdateGuard from './pages/Guards/UpdateGuard';
import ArmoryList from './pages/Armory/ArmoryList';
import Maintenance from './utils/maintenance';
import PageNotFound from './utils/PageNotFound';


const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ Auth }/>
      <Route exact path="/dashboard" component={ Dashboard }/>
      <Route exact path="/guards" component={ GuardsList }/>
      <Route exact path="/guards/add" component={ AddGuard }/>
      <Route exact path="/guards/update" component={ UpdateGuard }/>
      <Route exact path="/armory" component={ ArmoryList }/>
      <Route exact path="/maintenance" component={ Maintenance }/>
      <Route exact path="/pagenotfound" component={ PageNotFound }/>
    </Switch>
    </BrowserRouter>
  )
}

export default App
