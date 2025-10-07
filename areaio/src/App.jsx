import "./App.css";
import HomeBox from "./components/HomeBox.jsx";
import { Link, Outlet } from "react-router-dom";

function App() {
	return (
		<>
			<div
				id="body"
				className="flex flex-col justify-center items-center w-full h-screen"
			>
				<h1 className="text-9xl text-amber-300 font-bold">AREA IO</h1>
				<div id="categories" className="flex gap-20 mt-20">
					<Link to="/pages/TwoDShapes">
						<HomeBox title={"2D Shapes"} />
					</Link>
					<Link to="/pages/ThreeDShapes">
						<HomeBox title={"3D Shapes"} />
					</Link>
				</div>
			</div>
			{/* This is where the page content will be shown */}
			<div id="page-content">
				<Outlet />
			</div>
		</>
	);
}

export default App;
