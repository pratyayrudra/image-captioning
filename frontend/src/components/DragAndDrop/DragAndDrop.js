import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './draganddrop.css';

const DragAndDrop = () => {
	const [files, setFiles] = useState([]);

	const { getRootProps, getInputProps } = useDropzone({
		accept: 'image/*',
		onDrop: (acceptedFiles) => {
			setFiles(
				acceptedFiles.map((file) =>
					Object.assign(file, {
						preview: URL.createObjectURL(file),
					})
				)
			);
		},
	});

	const images = files.map((file) => (
		<div key={file.name}>
			<div>
				<img
					src={file.preview}
					style={{ width: '200px' }}
					alt='preview'
				></img>
			</div>
		</div>
	));
	console.log(files);

	let uploadFile = () => console.log('upload file');

	return (
		<>
			<div
				{...getRootProps()}
				className='drop-area'
				style={{ width: '50vw', height: '300px' }}
			>
				<input {...getInputProps()} />
				<p>Drop files here</p>
			</div>
			<button onClick={uploadFile}>Upload</button>

			<div>{images}</div>
		</>
	);
};

export default DragAndDrop;
