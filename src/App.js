import { Route, Routes } from "react-router-dom";
import AppLayout from "./pages/layouts/AppLayout";
import Characters from "./components/Characters";
import CharacterDetails from "./pages/CharacterDetails";

function App() {
	return (
		<Routes>
			<Route path="/" element={<AppLayout />}>
				<Route index element={<Characters />} />
				<Route path="character-:id" element={<CharacterDetails />} />
				<Route path="*" element={<div>Sayfa bulunamadı...</div>} />
			</Route>
		</Routes>
	);
}

export default App;
