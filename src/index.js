import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
	render() {
		return (
			<div className="main">
				<div className="logo">Fotogratis</div>
				<div className="tagline">Free photos & videos.</div>
				<div className="searchbar">Search</div>
				<div className="filters">Filters</div>
				<div className="photos">Photos</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
