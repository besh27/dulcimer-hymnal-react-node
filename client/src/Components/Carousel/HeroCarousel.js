import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import hymnalProductData from '../../data/hymnalProductData';

function HeroCarousel(props) {
	return (
		<Carousel>
            {hymnalProductData.map((product, index) => (
                <Carousel.Item key={index}>
                    <img className="d-block w-100" src={product.imgSrc} alt={product.title} />
                    <Carousel.Caption>
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
		</Carousel>
	);
}

export default HeroCarousel;
