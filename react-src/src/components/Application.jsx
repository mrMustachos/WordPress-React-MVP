import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Page from '../templates/Page.js';
import Notfound from '../templates/Notfound';
import Archive from '../templates/Archive';
import Single from '../templates/Single';

class Application extends Component {
	render() {
		return (
			<main className="Application">
				<Switch>
					<Route exact path="/" component={ Page } />
					<Route exact path="/blog" component={ Archive } />
					<Route exact path="/:slug" component={ Page } />
					<Route exact path="/blog/:slug" component={ Single } />
					<Route path="/category/:catid" component={ Archive } />
					<Route path="/search/:term" component={ Archive } />
					<Redirect exact from='/search/' to='/' />
					<Redirect exact from='/category/' to='/' />
					<Route component={ Notfound } />
				</Switch>
			</main>
		);
	}
}


// <Route exact path='/post/' component={ Archive } />
// <Route path="/post/:slug" component={ Single } />
// <Route exact path="/:slug" component={ Single } />
// <Route path="/category/:catid" component={ Archive } />
// <Route path="/search/:term" component={ Archive } />
// <Redirect exact from='/page/' to='/' />
// <Redirect exact from='/search/' to='/' />
// <Redirect from='/*/*/*/:slug' to='/post/:slug' />
// <Route component={ Notfound } />

export default Application;
