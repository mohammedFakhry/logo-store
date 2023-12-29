import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBooks = createAsyncThunk(
    'book/fetchBooks',
    async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const res = await fetch('https://fakestoreapi.com/products?limit=8');
        const data = await res.json();
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
    }
);

const BookSlice = createSlice({
    name: "book",
    initialState: { books: [], loading: false, error: null },
    reducers: {},
    extraReducers: {
        //fetch
        [fetchBooks.pending]: (state, action) => {
        state.loading = true;
        state.error = null;
        },
        [fetchBooks.fulfilled]: (state, action) => {
        state.books = action.payload;
        state.loading = false;
        },
        [fetchBooks.rejected]: (state, action) => {
        state.error = action.payload;
        state.loading = false;
        },
    },
});

export default BookSlice.reducer;