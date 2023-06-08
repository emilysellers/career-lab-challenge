import { useState } from 'react';

import { searchArtworks } from '../api';
import { SearchForm } from './SearchForm';
import { Footer } from './Footer';

import './App.css';
// import ImageDetailsPage from './ImageDetailsPage.jsx';

export function App() {
	const [searchResults, setSearchResults] = useState([]);
	const [selectedArtworkId, setSelectedArtworkId] = useState('');

	function onSearchSubmit(query) {
		// Search for the users's query.
		// TODO: render the results, instead of logging them to the console.
		// NOTE: `searchArtworks` currently returns local data, so that we
		// don't make too many requests to the API! Once we've built out
		// our UI, we need to make real requests!
		// @see: ./src/api.js
		searchArtworks(query).then((json) => {
			const artworksData = json.data;
			// console.log(artworksData);
			setSearchResults(artworksData); // save search results to state
		});
	}

	return (
		<div className="App">
			<h1>TCL Career Lab Art Finder</h1>
			<SearchForm onSearchSubmit={onSearchSubmit} />
			<ul>
				{searchResults.map((artwork) => (
					<a
						href={`#${artwork.image_id}`}
						onClick={() => setSelectedArtworkId(artwork.image_id)}
					>
						<li key={artwork.title}>
							{artwork.title} by{' '}
							{artwork.artist_title == null ? 'unknown' : artwork.artist_title}
						</li>
					</a>
				))}
			</ul>
			<Footer />
		</div>
	);
}
