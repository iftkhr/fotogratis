import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// components

import Photo from './components/Photo/Photo';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			error: null,
			isLoaded: false,
			photos: [],
			pexels: [],
			pixabay: [],
			query: null,
		};
	}

	onEnter = (event) => {
		if (event.keyCode == 13) {
			this.setState({
				query: document.getElementById('search').value,
			});
			setInterval(() => {
				this.componentDidMount();
			}, 1000);
		}
	};

	onClick = () => {
		this.setState({
			query: document.getElementById('search').value,
		});
		setInterval(() => {
			this.componentDidMount();
		}, 1000);
	};

	componentDidMount() {
		let pexelsUrl;
		let pixabayUrl;
		if (this.state.query !== '' && this.state.query !== null) {
			pexelsUrl = `https://api.pexels.com/v1/search?query=${this.state.query}&per_page=50`;
			pixabayUrl = `https://pixabay.com/api/?key=26319575-80adeb24f754dd7d1c530e6b4&q=${this.state.query}&orientation=horizontal&per_page=100`;
		} else {
			pexelsUrl = `https://api.pexels.com/v1/curated?page=${new Date().getHours()}&per_page=50`;
			pixabayUrl = `https://pixabay.com/api/?key=26319575-80adeb24f754dd7d1c530e6b4&page=${
				new Date().getDay() + 1
			}&orientation=horizontal&per_page=100`;
		}
		fetch(pexelsUrl, {
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
						pexels: result.photos,
					});
				},
				(error) => {
					this.setState({
						isLoaded: true,
						error,
					});
				}
			);
		fetch(pixabayUrl, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
			},
		})
			.then((res) => res.json())
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
						pixabay: result.hits,
					});
				},
				(error) => {
					this.setState({
						isLoaded: true,
						error,
					});
				}
			);
		setTimeout(() => {
			this.setState({
				photos: this.state.pexels.concat(this.state.pixabay),
			});
		}, 1000);
	}

	render() {
		return (
			<div className="main">
				<div className="logo">Fotogratis</div>
				<div className="searchbar">
					<div className="searchbar-container">
						<input
							type="text"
							placeholder="Search free photos"
							name="search"
							className="searchbar-input"
							id="search"
							onKeyUp={this.onEnter}
						/>
						<img
							className="searchbar-icon"
							src="search-icon.svg"
							alt="search-icon"
							onClick={this.onClick}
						/>
					</div>
				</div>
				<div className="photos">
					{this.state.photos.map((photo) => (
						<div className="photo" key={photo.id}>
							<Photo
								source={photo}
								error={this.state.error}
								load={this.state.isLoaded}
							/>
						</div>
					))}
				</div>
				<div className="footer">
					Made by <a href="https://iftkhr.me">iftkhr</a> & sourced
					from <a href="">Pexels</a> and <a href="">Pixabay</a>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
