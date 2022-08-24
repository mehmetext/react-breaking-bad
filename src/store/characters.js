import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { getCharacters } from "../services/httpService";

export const dataLimit = 12;

const initialState = {
	loading: false,
	characters: [],
	nextPage: 0,
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
			state.characters = action.payload;
		},
	},
});

export const useCharacters = () => useSelector((state) => state.characters);

export default slice.reducer;
