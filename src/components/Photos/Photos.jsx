import React from 'react';
import './Photos.css';

// components

import Photo from '../Photo/Photo';

class Photos extends React.Component {
	render() {
		return (
			<div className="photos-container">
				<div className="photo">
					<Photo />
				</div>
			</div>
		);
	}
}

export default Photos;
