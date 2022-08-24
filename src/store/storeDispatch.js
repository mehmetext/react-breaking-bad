import store from ".";

import { getCharacters } from "../services/httpService";

export const getCharactersDispatch = (str) => {
	store.dispatch(getCharacters(str));
};
