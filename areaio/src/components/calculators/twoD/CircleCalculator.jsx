const CircleCalculator = () => {
	const [radius, setRadius] = useState("");
	const area = radius ? Math.PI * radius * radius : 0;

	return (
		<div className="flex flex-col gap-2 items-center">
			<label>Radius (r):</label>
			<input
				type="number"
				value={radius}
				onChange={(e) => setRadius(e.target.value)}
				className="border p-2 rounded w-32 text-center"
			/>
			<p className="mt-2">Area = πr² = {area.toFixed(2)}</p>
		</div>
	);
};

export default CircleCalculator;
