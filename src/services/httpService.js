import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCharacters = createAsyncThunk(
	"characters/getCharacters",
	async (data) => {
		const response = await axios(
			`https://www.breakingbadapi.com/api/characters?limit=${
				data.limit
			}&offset=${data.limit * data.page}`
		);

		return response.data;
	}
);

export const getCharacter = async (id) => {
	const response = await axios(
		`https://www.breakingbadapi.com/api/characters/${id}`
	);

	return response.data;
};
