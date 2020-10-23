import React from 'react';

const SearchBox = ({searchChange}) => {
  return (
  	<div className="pa-2">
	  <label for="searchRobots">Find </label>
	  <input
		  id="searchRobots"
		  className="pa3 ba b--green bg-lightest-blue"
		  type="search"
		  placeholder="search robots"
		  onChange={searchChange}
	  />
  	</div>
  )
};

export default SearchBox;
