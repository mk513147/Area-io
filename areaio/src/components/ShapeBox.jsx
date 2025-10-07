const ShapeBox = ({ title }) => {
	return (
		<div className="aspect-square w-28 sm:w-32 md:w-40 lg:w-52 xl:w-60 flex flex-col border-2 border-black rounded-xl overflow-hidden shadow-lg">
			<div id="imageContainer" className="w-full h-4/5 bg-cyan-300"></div>
			<p className="w-full h-1/5 text-center ">{title}</p>
		</div>
	);
};

export default ShapeBox;
