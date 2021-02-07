import React from 'react';
import './imageCard.css';

const ImageCard = (props) => {
	let { imageSrc, caption } = { ...props };
	return (
		<div className='card'>
			<img
				src='https://www.pixel4k.com/wp-content/uploads/2019/03/spiderman-miles-lost-in-space-4k_1553071367.jpg'
				alt='dsfs'
			/>
			<div className='info'>
				<h1>Heading</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Quam, quidem quis nulla minima inventore cum commodi dolorem
					autem officiis delectus non maiores quia numquam iure
					voluptatum et porro iste eaque!
				</p>
			</div>
		</div>
	);
};

export default ImageCard;
