import React, { Component } from 'react';
import Head from '../partials/Head';
import Foot from '../partials/Foot';

class NotFound extends Component {
	render() {
		return (
			<div className="notfound">
				<Head />
				<div className="content-area">
					<h1>404 Not Found</h1>
				</div>
				<Foot />
			</div>
		);
	}
};

export default NotFound;