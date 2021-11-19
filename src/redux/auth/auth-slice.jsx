import { createSlice } from '@reduxjs/toolkit';

import { register, logIn, logOut, fetchCurrentUser } from '../../redux/auth';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state, action) {
      state = initialState;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.isLoggedIn = true;
    },
  },
});

export default authSlice.reducer;
