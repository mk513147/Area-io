import "./App.css";
import HomeBox from "./components/HomeBox.jsx";
import { Link, Outlet } from "react-router-dom";

function App() {
	return (
		<>
			<div
				id="body"
				className="flex flex-col justify-center items-center w-full min-h-screen"
			>
				<h1 className="md:text-9xl text-6xl text-amber-300 font-bold">
					AREA IO
				</h1>
				<div
					id="categories"
					className="flex flex-wrap justify-center gap-20 mt-20"
				>
					<Link to="/pages/TwoDShapes">
						<HomeBox title={"2D Shapes"} />
					</Link>
					<Link to="/pages/ThreeDShapes">
						<HomeBox title={"3D Shapes"} />
					</Link>
				</div>
			</div>
			<div id="page-content">
				<Outlet />
			</div>
		</>
	);
}

export default App;
