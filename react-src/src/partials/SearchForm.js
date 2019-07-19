import React, { useContext } from 'react';
// import { withRouter } from 'react-router-dom';
import { PageContext } from '../providers/PageProvider.jsx';

const SearchForm = (props) => {
	const { term, updateSearhTerm, submitSearch } = useContext(PageContext);

	// console.log(props);

	const updateTerm = (e) => updateSearhTerm(e.target.value);
	const submitSearchTerm = (e) => {
		e.preventDefault();
		submitSearch();
	};
	
	return (
		<form className="searchForm">
			<input onChange={ updateTerm } value={ term } />
			<button onClick={ submitSearchTerm }>Submit</button>
		</form>
	);
};

export default SearchForm;
// export default withRouter(SearchForm);
