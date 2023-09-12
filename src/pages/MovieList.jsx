import React from 'react';

const MovieList = ({ listForRender, listTitle }) => {
	return (
		<div>
			<MovieCardDetails
				listForRender={listForRender}
				listTitle={listTitle}></MovieCardDetails>
		</div>
	);
};

export default MovieList;
