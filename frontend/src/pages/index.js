import React, { useState } from 'react';
import DragAndDrop from '../components/DragAndDrop/DragAndDrop';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import SearchBox from '../components/SearchBox/SearchBox';

const Home = () => {
	const [flag, setFlag] = useState(false);
	const [searchResults, setSearchResults] = useState([]);
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				height: '90vh',
				alignItems: 'center',
				margin: '10px',
			}}
		>
			<SearchBox setFlag={setFlag} setSearchResults={setSearchResults} />
			{!flag ? (
				<div style={{ textAlign: 'center', margin: '20px' }}>
					<h1>OR</h1>
					<h3>Upload images</h3>
					<DragAndDrop />
				</div>
			) : (
				<ImageGallery data={searchResults} />
			)}
		</div>
	);
};

export default Home;
