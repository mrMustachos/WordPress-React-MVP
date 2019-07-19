import React from 'react'; 
import { NavLink } from 'react-router-dom';
import SearchForm from '../partials/SearchForm';

const Head = () => (
	<div className="header">
		<ul className="navigation">
			<li className="link">
				<NavLink to="/">Home</NavLink>
			</li>
			<li className="link">
				<NavLink to="/about">About</NavLink>
			</li>
			<li className="link">
				<NavLink to="/blog">Blog</NavLink>
			</li>
		</ul>
		<SearchForm />
	</div>
);

export default Head;