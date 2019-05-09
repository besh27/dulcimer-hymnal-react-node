import React from 'react';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { fab } from '@fortawesome/free-solid-svg-icons'

//library.add(fab)

function Social(props) {
	return (
		<div>
			<a
				className="btn btn-social-icon btn-youtube"
				href="https://www.youtube.com/channel/UCbiKk5Qek1CsxcO__eFBQHQ?view_as=subscriber"
                target="_blank"
                rel="noopener noreferrer"
			>
				
                <i className="fab fa-facebook"></i>
			</a>
			<a
				className="btn btn-social-icon btn-google"
				href="https://plus.google.com/u/0/110047932889162495562"
                target="_blank"
                rel="noopener noreferrer"
			>
				
			</a>
			<a
				className="btn btn-social-icon btn-facebook"
				href="https://www.facebook.com/groups/thedulcimerhymnal/"
                target="_blank"
                rel="noopener noreferrer"
			>
				
			</a>
            <a 
                className="btn btn-social-icon btn-twitter" 
                href="https://twitter.com/besh27" 
                target="_blank"
                rel="noopener noreferrer"
            >
				
			</a>
		</div>
	);
}

export default Social;
