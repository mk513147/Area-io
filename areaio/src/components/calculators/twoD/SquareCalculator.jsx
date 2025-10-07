import { useState } from "react";

const SquareCalculator = () => {
	const [side, setSide] = useState("");
	const area = side ? side * side : 0;

	return (
		<div className="flex flex-col gap-2 items-center">
			<label>Side Length (s):</label>
			<input
				type="number"
				value={side}
				onChange={(e) => setSide(e.target.value)}
				className="border p-2 rounded w-32 text-center"
			/>
			<p className="mt-2">Area = s² = {area.toFixed(2)}</p>
		</div>
	);
};

export default SquareCalculator;
