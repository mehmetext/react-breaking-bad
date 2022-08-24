import { Link, Outlet } from "react-router-dom";

export default function HomeLayout() {
	return (
		<>
			<div className="appBar">
				<div className="logo">
					<Link to="/">Breaking Bad</Link>
				</div>
				<div className="menu"></div>
			</div>
			<Outlet />
		</>
	);
}
