import { useState } from "react";

const RectangleCalculator = () => {
	const [length, setLength] = useState("");
	const [breadth, setBreadth] = useState("");
	const area = length && breadth ? length * breadth : 0;
	const perimeter = length && breadth ? 2 * (length + breadth) : 0;

	return (
		<div className="flex flex-col gap-2 items-center">
			<label>Length (l):</label>
			<input
				type="number"
				value={length}
				onChange={(e) => setLength(e.target.value)}
				className="border p-2 rounded w-32 text-center"
			/>
			<label>Breadth (b):</label>
			<input
				type="number"
				value={breadth}
				onChange={(e) => setBreadth(e.target.value)}
				className="border p-2 rounded w-32 text-center"
			/>
			<p className="mt-2">Area = {area.toFixed(2)}</p>
			<p className="mt-2">Perimeter = {perimeter.toFixed(2)}</p>
		</div>
	);
};

export default RectangleCalculator;
