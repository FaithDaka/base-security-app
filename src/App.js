import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={}/>
      <Route exact path="/dashboard" component={Dashboard}/>
    </Switch>
    </BrowserRouter>
  )
}

export default App
