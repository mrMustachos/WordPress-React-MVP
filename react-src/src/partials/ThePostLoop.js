import React from 'react'; 
import WithConsumer from '../context/WithConsumer';
import ThePost from './ThePost';

const ThePostLoop = ({ context }) => {
	// const all = () => context;
	const posts = () => context.posts;
	const pos = posts();
	let results = '';


	if (context.appError) {
		results = <div className="app-error">{ context.appError }</div>;
	} else {
		if (pos.length === 0) {
			results = <div className="no-results">no results</div>;
		} else {
			results = pos.map((item, i, all) => {
				return <ThePost key={ i } index={ i } />;
			})
		}
	}

	return (results);
};

export default WithConsumer(ThePostLoop);