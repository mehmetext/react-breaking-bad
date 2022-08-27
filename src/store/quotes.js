import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { getQuotes } from "../services/httpService";

const initialState = {
	status: "idle",
	quotes: [],
};

const slice = createSlice({
	name: "quotes",
	initialState,
	reducers: {},
	extraReducers: {
		[getQuotes.pending]: (state, action) => {
			state.status = "loading";
		},
		[getQuotes.fulfilled]: (state, action) => {
			state.status = "ready";
			state.quotes = action.payload;
		},
		[getQuotes.rejected]: (state, action) => {
			state.status = "error";
		},
	},
});

export const useQuotes = () => useSelector((state) => state.quotes);

export default slice.reducer;
