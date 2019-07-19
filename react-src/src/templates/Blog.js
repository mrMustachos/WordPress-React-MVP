import React from 'react'
import Head from '../partials/Head';
import ThePostLoop from '../partials/ThePostLoop';
import Pager from '../partials/Pager';
import Foot from '../partials/Foot';
import { Provider } from '../context/Context';

const Blog = (props) => {
	return (
		<Provider router={ props }>
			<div className="archive">
				<Head />
				<div className="content-area">
					<h1>Blog</h1>
					<ThePostLoop />
					<Pager />
				</div>
				<Foot />
			</div>
		</Provider>
	);
};

export default Blog;