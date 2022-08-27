import { Route, Routes } from "react-router-dom";
import AppLayout from "./pages/layouts/AppLayout";
import Characters from "./components/Characters";
import CharacterDetails from "./pages/CharacterDetails";
import QuoteDetail from "./pages/QuoteDetail";
import Quotes from "./pages/Quotes";

function App() {
	return (
		<Routes>
			<Route path="/" element={<AppLayout />}>
				<Route index element={<Characters />} />
				<Route path="character-:id" element={<CharacterDetails />} />
				<Route path="quotes">
					<Route index element={<Quotes />} />
					<Route path=":id" element={<QuoteDetail />} />
				</Route>
				<Route path="*" element={<div>Sayfa bulunamadı...</div>} />
			</Route>
		</Routes>
	);
}

export default App;
