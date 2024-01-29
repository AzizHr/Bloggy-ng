import * as AuthActions from '../store/auth.actions';
import {createReducer, on} from "@ngrx/store";
import {initialState} from "../state/auth.state";

export const authReducer = createReducer(initialState,
  on(AuthActions.login, state => ({ ...state, isLoading: true })),
  on(AuthActions.loginSuccess, (state, { user }) => ({ ...state, user, isLoading: false, isLoggedIn: true, error: null })),
  on(AuthActions.loginFailure, (state, { error }) => ({ ...state, error })),
  on(AuthActions.register, state => ({ ...state, isLoading: true })),
  on(AuthActions.registerSuccess, (state, { user }) => ({ ...state, user, isLoading: false, isRegistered: true, error: null })),
  on(AuthActions.registerFailure, (state, { error }) => ({ ...state, error })),
  on(AuthActions.loadUserArticles, state => ({ ...state, isLoading: true })),
  on(AuthActions.loadUserArticlesSuccess, (state, { articles }) => ({ ...state, isLoading: false, myArticles: articles })),
  on(AuthActions.loadUserArticlesFailure, (state, { error }) => ({ ...state, error }))
);
