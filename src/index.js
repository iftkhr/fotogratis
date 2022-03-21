import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// components

import SearchBar from './components/SearchBar/SearchBar';
import Photos from './components/Photos/Photos';

class App extends React.Component {
	render() {
		return (
			<div className="main">
				<div className="logo">Fotogratis</div>
				<div className="tagline">Free photos & videos.</div>
				<div className="searchbar">
					<SearchBar />
				</div>
				<div className="photos">
					<Photos />
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
