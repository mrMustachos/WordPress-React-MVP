import React from 'react'; 
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
// import WithConsumer from '../context/WithConsumer';
// import PostMeta from './PostMeta';

// const ThePost = ({ index, context }) => {
// 	const posts = () => context.posts;
// 	const item = posts()[index];

// 	let linkPrefix = item.type === 'page' ? '/page/' : '/blog/';
// 	let theContent = '';

// 	switch(context.route) {
// 		case '/': // if homepage,
// 		case '/blog': // if on the post page,
// 		case '/search/:term': // or if search
// 		case '/category/:catid': // or if search
// 			theContent = item.excerpt.rendered; // show excerpt only
// 			break;
// 		default: // for single, pages - show entire content
// 			theContent = item.content.rendered;
// 			break;
// 	}

// 	return (
// 		<div id={ `post-id-${item.id}` } className={ 'post-item' }>
// 			<h1><Link to={ `${linkPrefix}${item.slug}` }>{ item.title.rendered }</Link></h1>
// 			<PostMeta index={ index }></PostMeta>
// 			<div className="post-content" dangerouslySetInnerHTML={{__html:theContent}}></div>
// 		</div>
// 	);
// };

const ThePost = ({ data, match }) => {
	const { id, title, slug, excerpt, content } = data;
	let theContent = '';

	switch(match.path) {
		case '/blog': // if on the blog page,
		case '/search/:term': // or if search
		case '/category/:catid': // or if search
			theContent = excerpt.rendered; // show excerpt only
			break;

		default: // for single, pages - show entire content
			theContent = content.rendered;
			break;
	}

	return (
		<div id={ `post-id-${id}` } className={ 'post-item' }>
			<h1><Link to={`/blog/${slug}`} dangerouslySetInnerHTML={{__html:title.rendered}}></Link></h1>
			{/* <PostMeta index={ idx }></PostMeta> */}
			<div className="post-content" dangerouslySetInnerHTML={{__html:theContent}}></div>
		</div>
	);
};

export default withRouter(ThePost);
// export default WithConsumer(ThePost);