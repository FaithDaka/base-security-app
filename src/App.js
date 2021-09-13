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
import ReportPage from './pages/Reports/content';
import GuardProfile from './pages/Guards/GuardProfile';
import AdminProfile from './pages/Admins/AdminProfile';

const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ Auth }/>
      <ProtectedRoute exact path="/admin/:id/dashboard" component={ Dashboard }/>
      <ProtectedRoute exact path="/admin/:id/guards" component={ GuardsList }/>
      <ProtectedRoute exact path="/admin/:id/guards/add_new" component={ AddGuard }/>
      <ProtectedRoute exact path="/admin/:id/guards/update/:guard_id" component={ UpdateGuard }/>
      <ProtectedRoute exact path="/admin/:id/guards/profile/:guard_id" component={ GuardProfile }/>
      <ProtectedRoute exact path="/admin/:id/admins" component={ AdminList }/>
      <ProtectedRoute exact path="/admin/:id/add_new" component={ AddAdmin }/>
      <ProtectedRoute exact path="/admin/:id/profile" component={ AdminProfile }/>
      <ProtectedRoute exact path="/admin/:id/armory" component={ ArmoryList }/>
      <ProtectedRoute exact path="/maintenance" component={ Maintenance }/>
      <ProtectedRoute exact path="/pagenotfound" component={ PageNotFound }/>
      <ProtectedRoute exact path="/admin/:id/reports" component={ ReportPage }/>
    </Switch>
    </BrowserRouter>
  )
}

export default App
