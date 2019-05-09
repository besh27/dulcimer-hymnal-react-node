import React from 'react';

function FbPosts(props){
    return (
        <>
            <iframe 
                title="fbIframe"
                src="https://www.facebook.com/groups/thedulcimerhymnal/" 
                // src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="340" 
                height="500" 
            
                style={{"border": "none", "overflow": "hidden"}}
                scrolling="no" 
                frameBorder="0" 
                allowransparency="true" 
                allow="encrypted-media"
            >
            </iframe>
        </>
    )
}

export default FbPosts;