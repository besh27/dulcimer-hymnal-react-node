import React from 'react';
import HomeList from '../HymnalLists/HomeList';
import HeroCarousel from '../Carousel/HeroCarousel';
import SearchFilters from '../HymnalLists/SearchFilters';
import { Row, Col} from 'react-bootstrap';

function Home(props){
	return (
    <>
        <Row>
        <Col><HeroCarousel /></Col>
        </Row>
        <Row>
        <Col lg={8} xs={12}>
        <h2>Recent Arrangements:</h2>
            <HomeList />
        </Col>
        <Col lg={4}xs={12} className="filters affix">
            <SearchFilters />
        </Col>
        
        </Row>
    </>
    );
}

export default Home;