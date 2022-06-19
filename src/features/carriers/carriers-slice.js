import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { statuses } from '../../constants/statuses';
import { convertToArray } from './utils';

export const loadCarriers = createAsyncThunk(
  '@@carriers/load-carriers',
  (_, { extra: { client, api } }) => {
    return client.get(api.UTIL_CARRIERS);
  }
);

const initialState = {
  status: statuses.IDLE,
  error: null,
  list: [],
};

const carriersSlice = createSlice({
  name: '@@carriers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCarriers.pending, (state) => {
        state.status = statuses.LOADING;
        state.error = null;
      })
      .addCase(loadCarriers.rejected, (state, action) => {
        state.status = statuses.REJECTED;
        state.error = action.payload;
      })
      .addCase(loadCarriers.fulfilled, (state, action) => {
        state.status = statuses.RECEIVED;
        state.list = convertToArray(action.payload.data);
      });
  },
});

export const carriersReducer = carriersSlice.reducer;
