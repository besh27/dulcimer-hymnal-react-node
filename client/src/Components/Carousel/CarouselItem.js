import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CarouselItem(props) {
	return (
			<Carousel.Item>
				<img className="d-block w-100" src={props.src} alt={props.title} />
				<Carousel.Caption>
					<h3>{props.title}</h3>
					<p>{props.description}</p>
                    <a href={props.link} alt={props.title}>{`Check Out ${props.shortTitle}`}</a>
				</Carousel.Caption>
			</Carousel.Item>
	);
}

export default CarouselItem;
