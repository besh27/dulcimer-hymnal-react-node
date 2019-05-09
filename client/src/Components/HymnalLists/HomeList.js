import React from 'react';
import defaultFilters from '../../Services/defaultFilters';
import HymnalCard from './HymnalCard';

function HomeList(props) {

const hymnals = defaultFilters();
	return (
		<section>
			{hymnals.map((hymn, index) => (
				<HymnalCard
					key={index}
					title={hymn.title}
					composer={hymn.composer}
					words={hymn.words}
					timeSignature={hymn.timeSignature}
					keySig={hymn.keySig}
					scriptureRef={hymn.scriptureRef}
					arrangementYear={hymn.arrangementYear}
				/>
			))}
		</section>
	);
}

export default HomeList;
