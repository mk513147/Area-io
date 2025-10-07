import { useState } from "react";

const TriangleCalculator = () => {
	const [base, setBase] = useState("");
	const [height, setHeight] = useState("");
	const area = base && height ? 0.5 * base * height : 0;

	return (
		<div className="flex flex-col gap-2 items-center">
			<label>Base (b):</label>
			<input
				type="number"
				value={base}
				onChange={(e) => setBase(e.target.value)}
				className="border p-2 rounded w-32 text-center"
			/>
			<label>Height (h):</label>
			<input
				type="number"
				value={height}
				onChange={(e) => setHeight(e.target.value)}
				className="border p-2 rounded w-32 text-center"
			/>
			<p className="mt-2">Area = {area.toFixed(2)}</p>
		</div>
	);
};

export default TriangleCalculator;
