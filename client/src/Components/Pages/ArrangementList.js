import React from 'react';
import HomeList from '../HymnalLists/HomeList';
import SearchFilters from '../HymnalLists/SearchFilters';
import { Row, Col} from 'react-bootstrap';

function ArrangementList(props){
	return (
    <>
        <Row>
            <Col lg={8} s={4} xs={12}>
            <h2>{props.title}</h2>
            {/* <p>This section of free sheet music and tabs is filled with random hymns that were arranged for the mountain dulcimer, but are not in my hymnals. Every Monday a new hymn is added, so come back and visit the site often or follow the dulcimer hymnal on Twitter to be notified when new hymns are added! If you have any suggestions or requests, please contact me.</p> */}
                <HomeList />
            </Col>
            <Col lg={4} s={4} xs={12} className="filters affix">
                <SearchFilters />
            </Col>
        </Row>
    </>
    );
}

export default ArrangementList;