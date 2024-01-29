import { createSelector } from '@ngrx/store';
import {Article} from "../models/article.model";
import {AppState} from "../state/app.state";

export const selectFeature = (state: AppState) => state.articles;

export const isLoadingSelector = createSelector(selectFeature, (state) => state.isLoading);
export const articlesSelector = createSelector(selectFeature, (state) => state.articles);
export const articleSelector = createSelector(selectFeature, (state) => state.selectedArticle);
export const errorSelector = createSelector(selectFeature, (state) => state.error);
