import { useState } from 'react';

import { searchArtworks } from '../api';
import { SearchForm } from './SearchForm';
import { Footer } from './Footer';

import './App.css';
import ImageDetailsPage from './ImageDetailsPage.jsx';

export function App() {
	const [searchResults, setSearchResults] = useState([]);
	const [selectedArtwork, setSelectedArtwork] = useState('');

	function onSearchSubmit(query) {
		// Search for the users's query.
		// TODO: render the results, instead of logging them to the console.
		// NOTE: `searchArtworks` currently returns local data, so that we
		// don't make too many requests to the API! Once we've built out
		// our UI, we need to make real requests!
		// @see: ./src/api.js
		searchArtworks(query).then((json) => {
			const artworksData = json.data;
			setSearchResults(artworksData); // save search results to state
		});
	}

	// Conditionally render search results if no artwork is selected or ImageDetailsPage if artwork is selected
	return (
		<div className="App">
			<h1>TCL Career Lab Art Finder</h1>
			<SearchForm onSearchSubmit={onSearchSubmit} />
			{selectedArtwork === '' ? (
				<ul>
					{searchResults.map((artwork, index) => (
						<a
							key={artwork.image_id}
							href={`#${artwork.image_id}`}
							onClick={() => setSelectedArtwork(searchResults[index])}
						>
							<li key={artwork.image_id}>
								{artwork.title} by{' '}
								{artwork.artist_title == null
									? 'unknown'
									: artwork.artist_title}
							</li>
						</a>
					))}
				</ul>
			) : (
				<ImageDetailsPage selectedArtwork={selectedArtwork} />
			)}
			<Footer />
		</div>
	);
}
