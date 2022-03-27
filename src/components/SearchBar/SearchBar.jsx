import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
	constructor() {
		super();
		this.state = {
			error: null,
			isLoaded: false,
			photos: [],
			searchQuery: null,
		};
	}

	componentDidMount() {
		fetch(
			`https://api.pexels.com/v1/search?query=${this.state.searchQuery}&per_page=80`,
			{
				method: 'GET',
				headers: {
					Accept: 'application/json',
					Authorization:
						'563492ad6f91700001000001da14e6861e3f469aa84ef33d368adb0e',
				},
			}
		)
			.then((res) => res.json())
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
						photos: result.photos,
					});
				},
				(error) => {
					this.setState({
						isLoaded: true,
						error,
					});
				}
			);
	}
	render() {
		return (
			<div className="searchbar-container">
				<input
					type="text"
					placeholder="Search free photos"
					name="search"
					className="searchbar-input"
					value={this.state.searchQuery}
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
