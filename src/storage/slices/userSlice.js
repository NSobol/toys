import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from './../../utils/api';
import { isError, isLoading } from '../utilsStore';

// initial state
// ----------------------------------------------------
const initialState = {
  data: {},
  loading: false,
};
// ----------------------------------------------------

// actions
// ----------------------------------------------------
export const getUser = createAsyncThunk(
  'getUser',
  async function (
    dataFromUp,
    { getState, dispatch, fulfillWithValue, rejectWithValue }
  ) {
    const data = await api.getMyUserInfo();
    console.log(data);
    return data;
  }
);

export const updateUser = createAsyncThunk('updateUser', async function (data) {
  console.log({ data });
  if (data.avatar) {
    const res = await api.getResetUserAvatar({ avatar: data.avatar });
    return res;
  } else {
    const res = await api.getResetUserNameAbout({
      name: data.name,
      about: data.about,
    });
    return res;
  }
});

// ----------------------------------------------------
// slice // reducer
// ----------------------------------------------------

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addMatcher(isError, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addMatcher(isLoading, (state) => {
      state.loading = true;
    });
  },
});
// ----------------------------------------------------

export default userSlice.reducer;
