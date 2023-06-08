import React from 'react';

const ImageDetailsPage = ({ selectedArtwork }) => {
	return (
		<>
			<div>{selectedArtwork.title}</div>
			<div>{selectedArtwork.artist_title}</div>
			{/* TO DO: render image from AIC API call */}
			<image alt={selectedArtwork.thumbnail.alt_text}>
				{selectedArtwork.thumbnail.alt_text}
			</image>
			{/* TO DO: add back button functionality using history */}
			<button>Back</button>
		</>
	);
};

export default ImageDetailsPage;
