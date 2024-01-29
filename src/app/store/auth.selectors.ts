import { createSelector } from '@ngrx/store';
import {AppState} from "../state/app.state";

export const selectFeature = (state: AppState) => state.auth;

export const isLoadingSelector = createSelector(selectFeature, (state) => state.isLoading);
export const isLoggedInSelector = createSelector(selectFeature, (state) => state.isLoggedIn);
export const isRegisteredSelector = createSelector(selectFeature, (state) => state.isRegistered);
export const userSelector = createSelector(selectFeature, (state) => state.user);
export const userArticlesSelector = createSelector(selectFeature, (state) => state.myArticles);
export const errorSelector = createSelector(selectFeature, (state) => state.error);
