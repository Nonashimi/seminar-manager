import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// тип Семинара
export interface Seminar {
    id: number;
    title: string;
    description: string;
    date: string; 
    time: string;
    photo: string;
}

interface SeminarsState {
    seminars: Seminar[];
    loading: boolean;
    error: string | null;
}

// InitialState
const initialState: SeminarsState = {
    seminars: [],
    loading: false,
    error: null
};

export interface initialSeminarState {
    seminars: SeminarsState
}
// fetch seminars from api
export const fetchSeminars = createAsyncThunk<Seminar[]>(
    "seminars/fetchSeminars",
    async () => {
        const { data } = await axios.get("http://localhost:5000/seminars");
        return data;
    }
);
// delete seminar from api by id 
export const deleteSeminar = createAsyncThunk<Seminar, number>(
    'seminar/deleteSeminar',
    async (id) => {
        const { data } = await axios.delete(`http://localhost:5000/seminars/${id}`);
        return data;
    }
)
// update seminar with new values
export const updateSeminar = createAsyncThunk<Seminar, Seminar>(
    'seminars/updateSeminar',
    async (seminar: Seminar) => {
        try {
            const response = await axios.put(`http://localhost:5000/seminars/${seminar.id}`, seminar);
            return response.data; 
        } catch (error: any) {
            console.error("error");
        }
    }
);

// Slice 
const seminarSlice = createSlice({
    name: "seminars",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSeminars.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSeminars.fulfilled, (state, action) => {
                state.loading = false;
                state.seminars = action.payload;
            })
            .addCase(fetchSeminars.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to fetch seminars";
            })

            .addCase(deleteSeminar.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteSeminar.fulfilled, (state, action) => {
                state.loading = false;
                state.seminars = state.seminars.filter((seminar) => seminar.id !== action.payload.id);
            })
            .addCase(deleteSeminar.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to fetch seminars";
            })
            .addCase(updateSeminar.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateSeminar.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.seminars.findIndex(seminar => seminar.id === action.payload.id);
                if (index !== -1) {
                    state.seminars[index] = action.payload;
                }
            })
            .addCase(updateSeminar.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to fetch seminars";
            })
    }
});

// Export reducer
export const reducerSeminar = seminarSlice.reducer;
