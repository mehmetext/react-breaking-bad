import { configureStore } from "@reduxjs/toolkit";
import characters from "./characters";

const store = configureStore({
	reducer: {
		characters,
	},
});

export default store;
