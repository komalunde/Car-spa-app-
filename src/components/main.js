import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Contact from './contact';
import Resume from './resume';
import Landing from './landing';
const Main = () => (
  <Switch>
    <Route path="/contact" component={Contact} />
    <Route path="/resume" component={Resume} />
	   <Route path="/landing" component={Landing} />
  </Switch>
)

export default Main;