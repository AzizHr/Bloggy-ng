import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ArticleState } from '../../state/article.state';

export const selectArticleState = createFeatureSelector<ArticleState>('articles');

export const selectArticles = createSelector(
  selectArticleState,
  (state: ArticleState) => state.articles
);
