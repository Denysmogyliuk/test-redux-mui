import { RootState } from "app/store";

export const all = (state: RootState) => state.auth;
export const selectIsAuth = (state: RootState) => state.auth.isAuthenticated;
export const selectIsError = (state: RootState) => state.auth.error;
export const selectInAuthorizing = (state: RootState) => state.auth.inAuthorizing;
