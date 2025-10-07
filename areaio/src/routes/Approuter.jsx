import { Routes, Route } from "react-router-dom";

import TwoDShapes from "../pages/TwoDShapes.jsx";
import ThreeDShapes from "../pages/ThreeDShapes.jsx";
import App from "../App";

const Approuter = () => {
	return (
		<Routes>
			<Route path="/" element={<App />}></Route>
			<Route path="pages/TwoDShapes" element={<TwoDShapes />} />
			<Route path="pages/ThreeDShapes" element={<ThreeDShapes />} />
		</Routes>
	);
};

export default Approuter;
