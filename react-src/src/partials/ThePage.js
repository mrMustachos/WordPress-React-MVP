import React from 'react'; 
// import { Link } from 'react-router-dom';
import WithConsumer from '../context/WithConsumer';
// import PostMeta from './PostMeta';

const ThePage = ({ index, context }) => {
	const pages = () => context.pages;
	const page = pages()[index];

	return (
		<div id={ `page-id-${page.id}` } className={ 'post-item' }>
			<h1>{ page.title.rendered }</h1>
			<h2>{ page.acf.page_title }</h2>
			<div className="post-content" dangerouslySetInnerHTML={{ __html:page.content.rendered }}></div>
		</div>
	);
};

export default WithConsumer(ThePage);