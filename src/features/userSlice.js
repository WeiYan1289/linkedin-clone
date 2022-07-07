import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { increment, decrement, incrementByAmount } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;
