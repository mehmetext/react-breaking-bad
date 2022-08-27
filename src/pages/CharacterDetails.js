import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacter } from "../services/httpService";
import Info from "../components/Info";

export default function CharacterDetails() {
	const { id } = useParams();
	const [loading, setLoading] = useState(false);
	const [char, setChar] = useState();

	useEffect(() => {
		(async () => {
			setLoading(true);
			setChar((await getCharacter(id))[0]);
			setLoading(false);
		})();
	}, [id]);

	if (loading) return <Info />;

	if (char == null) return <Info text="No characters..." />;

	return (
		<div>
			<h1>{char.name}</h1>
			<img alt={char.name} src={char.img} style={{ width: "50%" }} />
			<div>
				<pre>{JSON.stringify(char, null, 2)}</pre>
			</div>
		</div>
	);
}
