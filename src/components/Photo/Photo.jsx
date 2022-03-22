import React from 'react';
import './Photo.css';

class Photo extends React.Component {
	render() {
		// if (this.props.error) {
		// 	return <div className="photos-container">Error!</div>;
		// } else if (!this.props.load) {
		// 	return <div className="photos-container">Loading...</div>;
		// } else {
		return (
			<div className="photo-container">
				<img src={this.props.source} className="photograph" alt="" />
			</div>
		);
	}
}
// }

export default Photo;
