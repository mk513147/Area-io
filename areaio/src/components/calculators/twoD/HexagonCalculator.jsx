import { useState } from "react";

const HexagonCalculator = () => {
	const [side, setSide] = useState("");
	const area = side ? ((3 * Math.sqrt(3)) / 2) * Math.pow(side, 2) : 0;
	const perimeter = side ? 6 * side : 0;

	return (
		<div className="flex flex-col gap-2 items-center">
			<label>side (s):</label>
			<input
				type="number"
				value={side}
				onChange={(e) => setSide(e.target.value)}
				className="border p-2 rounded w-32 text-center"
			/>
			<p className="mt-2">Area = {area.toFixed(2)}</p>
			<p className="mt-2">Perimeter = {perimeter.toFixed(2)}</p>
		</div>
	);
};

export default HexagonCalculator;
