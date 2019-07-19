import React, { Fragment, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { PageContext } from '../providers/PageProvider.jsx';

import ThePost from '../partials/ThePost.js';

const BlogPage = ({ content, startIdx, endIdx, perSet, totalCount }) => {
	let { currentPage } = useContext(PageContext);
	let existsChunkedOut = content && (content.length === (currentPage * perSet));
	let fullLoad = content && content.length === totalCount;


	// const chunk = (array, size) => {
	// 	let chunked = [];
	// 	let idx = 0;
	// 	while (idx < array.length) {
	// 		let sliced = array.slice(idx, (idx + size));
	// 		chunked.push(sliced);
	// 		idx += size;
	// 	}

	// 	return chunked;
	// }

	console.log('endIdx: ', endIdx);

	// console.log('size match: ', content && (content.length === (curPage * perSet));
	// console.log('totalPages: ', totalPages);
	// console.log('/////////////////////');

	return (
		<Fragment>{
			fullLoad || existsChunkedOut ? (
				content.map((post, idx) => {
					// console.log('startIdx: ', startIdx);
					// console.log('endIdx: ', endIdx);

					let renderCheck = idx >= startIdx && idx <= endIdx;
					return renderCheck ? <ThePost key={ post.id } data={ post } /> : '';
				})
			) : (
				<h3>Loading...</h3>
			)
		}</Fragment>
	);
}

export default withRouter(BlogPage);