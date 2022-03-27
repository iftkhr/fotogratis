import React from 'react';
import './Photo.css';

class Photo extends React.Component {
	render() {
		let imgSource;
		let pageUrl;
		if (this.props.source.pageURL) {
			imgSource = this.props.source.largeImageURL;
			pageUrl = this.props.source.pageURL;
		} else {
			imgSource = this.props.source.src.landscape;
			pageUrl = this.props.source.url;
		}

		if (this.props.error) {
			return <div className="photos-container">Error!</div>;
		} else if (!this.props.load) {
			return <div className="photos-container">Loading...</div>;
		} else {
			return (
				<div className="photo-container">
					<a href={pageUrl} target="_blank" rel="noreferrer">
						<img src={imgSource} className="photograph" alt="" />
					</a>
				</div>
			);
		}
	}
}

export default Photo;
