import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { statuses } from '../../constants/statuses';
import { convertToArray } from './utils';

export const loadCurrencies = createAsyncThunk(
  '@@currencies/load-currencies',
  (_, { extra: { client, api } }) => {
    return client.get(api.UTIL_COUNTRIES);
  }
);

const initialState = {
  status: statuses.IDLE,
  error: null,
  list: [],
};

const currenciesSlice = createSlice({
  name: '@@currencies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCurrencies.pending, (state) => {
        state.status = statuses.LOADING;
        state.error = null;
      })
      .addCase(loadCurrencies.rejected, (state, action) => {
        state.status = statuses.REJECTED;
        state.error = action.payload;
      })
      .addCase(loadCurrencies.fulfilled, (state, action) => {
        state.status = statuses.RECEIVED;
        state.list = convertToArray(action.payload.data);
      });
  },
});

export const currenciesReducer = currenciesSlice.reducer;
