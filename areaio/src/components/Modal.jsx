import React, { useEffect } from "react";
import {
	CircleCalculator,
	SquareCalculator,
	RectangleCalculator,
	TriangleCalculator,
} from "./calculators";

const calculatorMap = {
	Circle: CircleCalculator,
	Triangle: TriangleCalculator,
	Rectangle: RectangleCalculator,
	Square: SquareCalculator,
};

const Modal = ({ toggleModal, title, shapeImage }) => {
	const CalculatorComponent =
		calculatorMap[title] || (() => <p>No calculator found.</p>);

	useEffect(() => {
		const originalStyle = window.getComputedStyle(document.body).overflow;
		document.body.style.overflow = "hidden";
		return () => (document.body.style.overflow = originalStyle);
	});

	return (
		<div className="fixed inset-0 bg-transparent backdrop-blur-md flex justify-center items-center w-full h-screen z-50">
			<div
				className="bg-white p-5 rounded-lg shadow-lg flex flex-col md:flex-row lg:flex-row 
                        w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] 
                        h-auto md:h-[60%] gap-4 justify-center items-center relative"
			>
				<div
					id="imageContainer"
					className="w-full lg:w-1/2 p-4 flex justify-center"
				>
					{shapeImage}
				</div>

				<div
					id="calculator"
					className="w-full lg:w-1/2 p-4 flex flex-col justify-between items-center h-full"
				>
					<h2 className="text-4xl font-bold mb-4">{title}</h2>
					<div id="inputGroup" className="mb-4">
						<CalculatorComponent />
					</div>
				</div>

				<button
					className="bg-blue-500 absolute top-4 right-4 text-white px-3 py-2 rounded hover:bg-blue-600"
					onClick={toggleModal}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						aria-hidden="true"
						focusable="false"
					>
						<title>Close</title>
						<path
							fill="currentColor"
							d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 1 0 5.7 7.11L10.59 12l-4.89 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default Modal;
