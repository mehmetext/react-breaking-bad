import { Route, Routes } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import Characters from "./components/Characters";

function App() {
	return (
		<Routes>
			<Route path="/" element={<HomeLayout />}>
				<Route index element={<Characters />} />
				<Route
					path="character-:id"
					element={<div>CharacterDetails</div>}
				/>
				<Route path="*" element={<div>Sayfa bulunamadı...</div>} />
			</Route>
		</Routes>
	);
}

export default App;
