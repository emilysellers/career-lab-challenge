import React from 'react';

const ImageDetailsPage = ({ selectedArtwork }) => {
	return (
		<>
			<div>{selectedArtwork.title}</div>
			<div>{selectedArtwork.artist_title}</div>
			{/* TO DO: render image from AIC API call */}
			<p alt={selectedArtwork.thumbnail.alt_text}>
				Image placeholder for: {selectedArtwork.thumbnail.alt_text}
			</p>
			{/* TO DO: add back button functionality using history */}
			<button>Back</button>
		</>
	);
};

export default ImageDetailsPage;
