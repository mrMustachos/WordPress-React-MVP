import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import './index.css';

import Application from './components/Application.jsx';
import PageProvider from './providers/PageProvider.jsx';

// import Archive from './templates/Archive';
// import Page from './templates/Page';
// import Single from './templates/Single';
// import Notfound from './templates/Notfound';

// const routes = (
// 	<Router>
// 		<Switch>
// 			<Route exact path="/" component={ Page } />
// 			<Route exact path='/post/' component={ Archive } />
// 			{/* <Route path="/page/:slug" component={ Single } /> */}
// 			<Route path="/post/:slug" component={ Single } />
// 			<Route exact path="/:slug" component={ Single } />
// 			<Route path="/category/:catid" component={ Archive } />
// 			<Route path="/search/:term" component={ Archive } />
// 			<Redirect exact from='/page/' to='/' />
// 			<Redirect exact from='/search/' to='/' />
// 			<Redirect from='/*/*/*/:slug' to='/post/:slug' />
// 			<Route component={ Notfound } />
// 		</Switch>
// 	</Router>
// );

render(
	<Router>
		<PageProvider>
			<Application />
		</PageProvider>
	</Router>,
	document.getElementById('root')
);