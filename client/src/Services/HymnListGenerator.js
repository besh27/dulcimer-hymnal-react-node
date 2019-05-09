import React from 'react';
import { Row, Col } from 'react-bootstrap';

function HymnListGenerator(props) {
	const hymnList = props.hymnList;
	const mid = Math.floor((0 + hymnList.length)/2);
	console.log(`Hymn List: ${hymnList}`);
	return (
		<div className="volume-info">
			<Row>
				<Col lg={6} xs={12} className="volumeHymns">
					<ol>
						{hymnList.filter((list, index) => {
							return index < mid;
						}).map((list, index) => 
							<li key={index}>{list}</li>
						)}
					</ol>
				</Col>
				<Col lg={6} xs={12} className="volumeHymns">
					<ol start={mid+1}>
						{hymnList.filter((list, index) => {
							return index >= mid;
						}).map((list, index) => 
							<li key={index}>{list}</li>
						)}			
					</ol>
				</Col>
			</Row>
		</div>
	);
}

export default HymnListGenerator;
