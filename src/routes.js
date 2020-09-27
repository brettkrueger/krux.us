//import { Route, IndexRoute } from 'react-router';
import { Route } from 'react-router';
import React from 'react';

/**
 * Import all page components here
 */
import App from './components/App';
import Index from './components/Index';
import Thoughts from './components/Thoughts';
import Projects from './components/Projects';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
 //<IndexRoute component={Index} />
export default (
  <Route path="/" component={App}>
    <Route path="/thoughts" component={Thoughts} />
    <Route path="/projects" component={Projects} />
  </Route>
);
