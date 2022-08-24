import { useEffect } from "react";
import { getCharactersDispatch } from "../store/storeDispatch";
import { useCharacters, dataLimit } from "../store/characters";

export default function Home() {
	const { nextPage } = useCharacters();

	useEffect(() => {
		getCharactersDispatch({ limit: dataLimit, page: nextPage });
	}, []);

	return <div>home</div>;
}
