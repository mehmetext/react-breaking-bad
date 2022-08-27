import store from ".";

import { getCharacters, getQuotes } from "../services/httpService";

export const getCharactersDispatch = (str) => {
	store.dispatch(getCharacters(str));
};

export const getQuotesDispatch = () => {
	store.dispatch(getQuotes());
};
