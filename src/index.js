import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// components

import Photo from './components/Photo/Photo';
import SearchBar from './components/SearchBar/SearchBar';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			error: null,
			isLoaded: false,
			photos: [],
			newUrl: `https://api.pexels.com/v1/curated?page=${new Date().getHours()}&per_page=80`,
		};
	}

	componentDidMount() {
		fetch(this.state.newUrl, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				Authorization:
					'563492ad6f91700001000001da14e6861e3f469aa84ef33d368adb0e',
			},
		})
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
			<div className="main">
				<div className="logo">Fotogratis</div>
				<div className="searchbar">
					<SearchBar />
				</div>
				<div className="photos">
					{this.state.photos.map((photo) => (
						<div className="photo" key={photo.id}>
							<Photo
								source={photo.src.landscape}
								error={this.state.error}
								load={this.state.isLoaded}
							/>
						</div>
					))}
				</div>
				<div className="footer">
					Made by <a href="https://iftkhr.me">iftkhr</a>{' '}
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
