import React from "react";

const HomeBox = ({ title }) => {
	return (
		<div className="aspect-square w-52 md:w-80 lg:w-96 xl:w-96 bg-amber-300 rounded-lg shadow-lg flex items-center justify-center border-2 border-amber-500">
			<div id="image"></div>
			<h2>{title}</h2>
		</div>
	);
};

export default HomeBox;
