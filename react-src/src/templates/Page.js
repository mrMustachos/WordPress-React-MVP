import React, { useContext, Fragment } from 'react';
import { PageContext } from '../providers/PageProvider.jsx';

import Head from '../partials/Head';
import Foot from '../partials/Foot';

import HomePage from '../components/HomePage.jsx';
import AboutPage from '../components/AboutPage.jsx';
import NotFoundPage from '../components/NotFoundPage.jsx';

const Page = (props) => {
	const { pgObj } = useContext(PageContext);

	const pagePicker = () => {
		const pageSlug = props.match.params.slug || 'index';
		let result = '';

		switch(pageSlug) {
			case 'about':
				result = <AboutPage content={ pgObj[pageSlug] } />;
				break;

			case 'index':
				result = <HomePage content={ pgObj[pageSlug] } />;
				break;

			default: // 404
				result = <NotFoundPage />;
				break;
		}

		return result;
	}

	return (
		<Fragment>{
			pgObj ? (
				<div className="pages">
					<Head />
					{ pagePicker() }
					<Foot />
				</div>
			) : (
				<div className="loader">
					<h3>Loading...</h3>
				</div>
			)
		}</Fragment>
	);
};

export default Page;
