import React from "react";

const HomeBox = ({ title }) => {
	return (
		<div className="h-96 w-96 bg-amber-300 rounded-lg shadow-lg flex items-center justify-center border-2 border-amber-500">
			<div id="image"></div>
			<h2>{title}</h2>
		</div>
	);
};

export default HomeBox;
