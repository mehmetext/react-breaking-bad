import { configureStore } from "@reduxjs/toolkit";
import characters from "./characters";
import quotes from "./quotes";

const store = configureStore({
	reducer: {
		characters,
		quotes,
	},
});

export default store;
