import React from 'react';
import { Link } from 'react-router-dom';
import style from './index.sass';

export default class Nav extends React.Component {
	
	render() {
		return (
			<header className="main-header clearfix">
				<h1 className="logo"><a href="index.html">KhalO!</a></h1>
				<nav>
					<div className="menu-button"><span className="fa fa-bars"></span></div>
						<ul className="main-menu">
							<li><a href="index.html">Home</a></li>
							<li><a href="archive.html">Archive</a></li>
							<li><a href="page-features-columns.html">Pages</a>
								<ul>
									<li><a href="page-features-columns.html">Columns</a></li>
									<li><a href="page-features-buttons.html">Buttons</a></li>
									<li><a href="page-features-tables.html">Tables</a></li>
									<li><a href="page-features-hrs.html">HR Styles</a></li>
									<li><a href="page-features-icons.html">Icons</a></li>
									<li><a href="page-features-highlight.html">Highlights</a></li>
									<li><hr /></li>
									<li><a href="page-404.html">404 Page</a></li>
									<li><a href="page-central-header.html">Central Header</a></li>
								</ul>
							</li>
							<li><a href="page-about.html">About</a></li>
							<li><a href="page-contact.html">Contact</a></li>
							<li className="search">
								<i className="fa fa-search search-handle"></i>
								<i className="fa fa-times close-handle"></i>                   
							</li>
						</ul>
				</nav>
			</header>
		);
	}
}
