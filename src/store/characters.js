import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { getCharacters } from "../services/httpService";

export const dataLimit = 30;

const initialState = {
	loading: false,
	characters: [],
	nextPage: 0,
	hasNext: true,
};

const slice = createSlice({
	name: "characters",
	initialState,
	reducers: {},
	extraReducers: {
		[getCharacters.pending]: (state, action) => {
			state.loading = true;
		},
		[getCharacters.fulfilled]: (state, action) => {
			state.loading = false;
			state.characters = [...state.characters, ...action.payload];
			state.nextPage++;
			state.hasNext = !(action.payload.length < dataLimit);

			console.log(state.hasNext, action.payload.length, dataLimit);
		},
	},
});

export const useCharacters = () => useSelector((state) => state.characters);

export default slice.reducer;
