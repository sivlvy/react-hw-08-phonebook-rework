export const selectAuthLoading = state => state.auth.isLoading;

export const selectAuthError = state => state.auth.isError;

export const selectAuthToken = state => state.auth.token;

export const selectAuthLogin = state => state.auth.isLogin;

export const selectAuthUser = state => state.auth.user;
