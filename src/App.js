import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './helpers/protectedRoute';
import Dashboard from './pages/Dashboard';
import Auth from './pages/Auth';
import GuardsList from './pages/Guards/GuardsList';
import AddGuard from './pages/Guards/AddGuard';
import UpdateGuard from './pages/Guards/UpdateGuard';

import AdminList from './pages/Admins/AdminList';
import AddAdmin from './pages/Admins/AddAdmin';

import ArmoryList from './pages/Armory/ArmoryList';
import Maintenance from './utils/maintenance';
import PageNotFound from './utils/PageNotFound';
import Reports from './pages/Reports';


const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ Auth }/>
      <ProtectedRoute exact path="/dashboard" component={ Dashboard }/>
      <ProtectedRoute exact path="/guards" component={ GuardsList }/>
      <ProtectedRoute exact path="/guards/add" component={ AddGuard }/>
      <ProtectedRoute exact path="/guards/update" component={ UpdateGuard }/>
      <ProtectedRoute exact path="/admins" component={ AdminList }/>
      <ProtectedRoute exact path="/admin/add" component={ AddAdmin }/>
      <ProtectedRoute exact path="/armory" component={ ArmoryList }/>
      <ProtectedRoute exact path="/maintenance" component={ Maintenance }/>
      <ProtectedRoute exact path="/pagenotfound" component={ PageNotFound }/>
      <ProtectedRoute exact path="/reports" component={ Reports }/>
    </Switch>
    </BrowserRouter>
  )
}

export default App
