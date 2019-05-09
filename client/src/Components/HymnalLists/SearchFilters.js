import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
// import FbPosts from '../Facebook/FbPosts';

function SearchFilters(props) {
	return (
		<ListGroup.Item>
			<h3>Let's Search!</h3>

			<form>
				<div className="form-group">
					<h4>Composer</h4>
				</div>
				<div className="form-check">
					<input type="checkbox" className="form-check-input" id="exampleCheck1" />
					<label className="form-check-label" htmlFor="exampleCheck1">
						Check me out
					</label>
				</div>
				<button type="submit" className="btn btn-primary">
					Search
				</button>
			</form>
			{/* <h5>Example Property Heading</h5>
			<div class="form-check">
				<input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
				<label class="form-check-label" for="defaultCheck1">
					Example property Value
				</label>
			</div> */}
		</ListGroup.Item>
	);
}

export default SearchFilters;
