import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
	render() {
		return (
			<div className="searchbar-container">
				<input
					type="text"
					placeholder="search..."
					name="search"
					className="searchbar-input"
				/>
				<img
					className="searchbar-icon"
					src="search-icon.svg"
					alt="search-icon"
				/>
			</div>
		);
	}
}

export default SearchBar;
