import React from 'react';
import Head from '../partials/Head';
import ThePostLoop from '../partials/ThePostLoop';
import Foot from '../partials/Foot';
import { Provider } from '../context/Context'
import CommentList from '../partials/CommentList';
import CommentForm from '../partials/CommentForm';

const Single = (props) => {
	let comments = ''; 
	let commentsForm = '';

	if (props.match.path === '/blog/:slug') {
		comments = <CommentList />; 
		commentsForm = <CommentForm />;
	}

	return (
		<Provider router={ props }>
			<div className="Post">
				<Head />
				<div className="content-area">
					<ThePostLoop />
				</div>
				{ comments }
				{ commentsForm }
				<Foot />
			</div>
		</Provider>
	);
};

export default Single;