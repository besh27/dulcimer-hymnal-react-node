import React from 'react';
import HomeList from '../HymnalLists/HomeList';
import HymnListGenerator from '../../Services/HymnListGenerator';
import { Container, Row, Col } from 'react-bootstrap';

function Volume(props) {
	return (
		<Container className="pageContent">
			<Row>
				<Col lg={8} xs={12}>
					<h2>{props.title}</h2>
					<div className="volume-info">
						<p>50 Traditional Hymns for the Mountain Dulcimer</p>
						<p>Purchase a PDF Version for your computer, ipad, tablet, nook or kindle!</p>
						<p>Each Hymnal Includes 50 Hymns for Only $15!!!</p>
						<p>
							We offer Low Shipping Options of $5 for a single hymnal! If you buy another hymnal, the
							second's shipping free! Buy three or more (up to ten) hymnals, the shipping is only $11!
						</p>
						<p>Pay With Money Order Mail all orders to my contact address</p>
					</div>
					<h4>Hymns</h4>
					<HymnListGenerator hymnList={props.hymnList} />
				</Col>
				<Col lg={4} xs={12} className="volume-arrangements">
					<h3>Featured Arrangements</h3>
					<HomeList />
				</Col>
			</Row>
		</Container>
	);
}

export default Volume;
