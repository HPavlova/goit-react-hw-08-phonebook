export { register, logIn, logOut, fetchCurrentUser } from './auth-operations';
export {
  getIsLoggedIn,
  getUserName,
  getIsFetchingCurrentUser,
} from './auth-selectors';
export { default as authSlice } from './auth-slice';
