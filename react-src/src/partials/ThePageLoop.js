import React from 'react'; 
import WithConsumer from '../context/WithConsumer';
import ThePage from './ThePage';

const ThePageLoop = ({ context }) => {
	const allContext = () => context;
	const page = allContext().pages;
	const fp = allContext().fpID;
	let results = '';

	// console.log(fp);
	// console.log(page);

	if (context.appError) {
		results = <div className="app-error">{ context.appError }</div>;

	} else {
		if (page.length === 0) {
			results = <div className="no-results">loading...</div>;

		} else {
			page.forEach((item, i) => {
				switch(context.route) {
					case '/': // if homepage,
						if (item.id === fp) {
							results = <ThePage key={ i } index={ i } />;
						}
						break;
					default: // for single, pages - show entire content
						console.log('not index: ', context.route);
						results = <ThePage key={ i } index={ i } />;
						break;
				}
			});
	

		}
	}

	return (results);
};

export default WithConsumer(ThePageLoop);