import React, { useContext, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { PageContext } from '../providers/PageProvider.jsx';

const Pagination = ({ totalCount, perSet, type }) => {
	let { currentPage, nextClicked, previousClicked, updateRestType } = useContext(PageContext);


	let prevBtn =  React.createRef(); 
	let nextBtn =  React.createRef(); 
	let curPage = currentPage;
	let totalPages = Math.ceil((totalCount / perSet));

	// console.log('curPage: ', curPage);
	// console.log('totalPages: ', totalPages);

	useEffect(() => {
		prevBtn.current.disabled = true;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	
	const nextPage = () => {
		updateRestType(type);
		nextClicked(type); 
		if (totalPages === curPage + 1) {
			nextBtn.current.disabled = true;
		}
		prevBtn.current.disabled = false;
	}

	const previousPage = () => {
		updateRestType(type);
		previousClicked(type); 
		if(curPage - 1 === 1) {
			prevBtn.current.disabled = true;
		}
		nextBtn.current.disabled = false;
	}

	const pagerClass = () => { 
		let cls = 'Pager'; 
		if (totalPages <= 1) {
			cls = 'Pager hidden';
		}
		return cls;
	}
	
	// return (<p>show me more shit please!</p>);

	return (
		<div className={ pagerClass() }>
			<button ref={ prevBtn } onClick={ previousPage }>Previous</button>
			<button ref={ nextBtn } onClick={ nextPage }>Next</button>
			<div className="PagerText">Page 
				<span>{ curPage }</span> of <span>{ totalPages }</span>
			</div>
		</div>
	);
}

export default withRouter(Pagination);