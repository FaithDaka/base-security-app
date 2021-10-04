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
import ClientList from './pages/Clients/ClientList';
import AddClient from './pages/Clients/AddClient';
import UpdateClient from './pages/Clients/UpdateClient';
import ClientProfile from './pages/Clients/ClientProfile';
import StoreList from './pages/Store/StoreList';
import LiveTracking from './pages/Tracking/LiveTracking';

import DeploymentList from './pages/Deployments/DeploymentList';
import InvoiceList from './pages/Invoices/InvoiceList';
import InvoiceDetails from './pages/Invoices/InvoiceDetails';
import AddInvoice from './pages/Invoices/AddInvoice';

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
      <ProtectedRoute exact path="/admin/:id/clientele" component={ ClientList }/>
      <ProtectedRoute exact path="/admin/:id/clientele/add_new" component={ AddClient }/>
      <ProtectedRoute exact path="/admin/:id/clientele/update/:client_id" component={ UpdateClient }/>
      <ProtectedRoute exact path="/admin/:id/clientele/profile/:client_id" component={ ClientProfile }/>
      <ProtectedRoute exact path="/admin/:id/store" component={ StoreList }/>
      <ProtectedRoute exact path="/admin/:id/livetracking" component={ LiveTracking }/>
      <ProtectedRoute exact path="/admin/:id/deployment" component={ DeploymentList }/>
      <ProtectedRoute exact path="/admin/:id/invoices" component={ InvoiceList }/>
      <ProtectedRoute exact path="/admin/:id/invoices/add_new" component={ AddInvoice }/>
      <ProtectedRoute exact path="/admin/invoices/:id" component={ InvoiceDetails }/>
    </Switch>
    </BrowserRouter>
  )
}

export default App
