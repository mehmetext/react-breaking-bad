import { useEffect } from "react";
import { getCharactersDispatch } from "../store/storeDispatch";
import { dataLimit } from "../store/characters";

import Masonry from "react-masonry-css";
import { Link } from "react-router-dom";
import { useCharacters } from "../store/characters";
import Loading from "./Loading";

export default function Characters() {
	const { characters, loading, nextPage, hasNext } = useCharacters();

	useEffect(() => {
		getCharactersDispatch({ limit: dataLimit, page: 0 });
	}, []);

	if (loading && characters.length < 1) return <Loading />;

	return (
		<>
			<Masonry
				breakpointCols={3}
				className="characters"
				columnClassName="characters-column"
			>
				{characters.map((character) => (
					<div key={character.char_id}>
						<img
							alt={character.name}
							src={character.img}
							className="character-img"
						/>
						<Link
							to={`character-${character.char_id}`}
							className="character-name"
						>
							{character.name}
						</Link>
					</div>
				))}
			</Masonry>

			{loading && characters && <Loading />}
			{hasNext && (
				<div className="load-more">
					<button
						onClick={() => {
							getCharactersDispatch({
								limit: dataLimit,
								page: nextPage,
							});
						}}
					>
						Load more
					</button>
				</div>
			)}
		</>
	);
}
