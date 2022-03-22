import React from 'react';
import './Photos.css';

// components

import Photo from '../Photo/Photo';

class Photos extends React.Component {
	render() {
		if (this.props.error) {
			return <div className="photos-container">Error!</div>;
		} else if (!this.props.load) {
			return <div className="photos-container">Loading...</div>;
		} else {
			return (
				<div className="photos-container">
					{console.log(this.props.photos)}

					{this.props.photos.map((photo) => (
						<div className="photo" key={photo.id}>
							<Photo source={photo.src} />
						</div>
					))}
				</div>
			);
		}
	}
}

export default Photos;
