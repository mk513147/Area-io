import { Link } from "react-router-dom";
import ShapeBox from "../components/ShapeBox";
import Modal from "../components/Modal";
import { useState } from "react";
import {
	CircleIcon,
	HexagonIcon,
	RectangleIcon,
	SquareIcon,
	TriangleIcon,
} from "@phosphor-icons/react";

const TwoDShapes = () => {
	const shapes = [
		{ id: 1, title: "Circle", image: <CircleIcon size={32} /> },
		{ id: 2, title: "Rectangle", image: <RectangleIcon size={32} /> },
		{ id: 3, title: "Triangle", image: <TriangleIcon size={32} /> },
		{ id: 4, title: "Square", image: <SquareIcon size={32} /> },
		{ id: 5, title: "Hexagon", image: <HexagonIcon size={32} /> },
	];

	const [showModal, setShowModal] = useState(false);
	const [selectedShape, setSelectedShape] = useState(null);
	const [shapeImage, setShapeImage] = useState(null);

	const toggleModal = (shapeTitle = null, shapeImage = null) => {
		setSelectedShape(shapeTitle);
		setShapeImage(shapeImage);
		setShowModal((prev) => !prev);
	};

	return (
		<div className="flex flex-col justify-center items-center w-full h-screen ">
			{showModal && (
				<Modal
					toggleModal={toggleModal}
					title={selectedShape}
					shapeImage={shapeImage}
				/>
			)}
			<Link
				to="/"
				className="flex justify-center items-center 
             text-white bg-amber-400 hover:bg-amber-500 
             text-3xl w-14 h-14 rounded-full 
             fixed top-10 left-10 z-50 leading-none 
			 transform transition-transform duration-200 
             hover:scale-110 hover:ring-4 hover:ring-amber-600"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M15 19l-7-7 7-7"
					/>
				</svg>
			</Link>
			<div
				id="shapeContainer"
				className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
             w-[85%] max-w-full sm:w-[90%] h-[85%] p-10 gap-10 place-items-center 
             overflow-y-auto overflow-x-hidden mx-auto scroll-smooth"
			>
				{shapes.map((shape) => (
					<button
						key={shape.id}
						type="button"
						onClick={() => toggleModal(shape.title, shape.image)}
					>
						<ShapeBox title={shape.title} />
					</button>
				))}
			</div>
		</div>
	);
};

export default TwoDShapes;
