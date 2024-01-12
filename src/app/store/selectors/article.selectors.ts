import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ArticleState } from '../../state/article.state';
import {Article} from "../../models/article.model";

export const selectArticleState = createFeatureSelector<ArticleState>('articles');

export const selectArticles = createSelector(
  selectArticleState,
  (state: ArticleState) => state.articles
);

export const selectArticle = (articleId: string) => createSelector(
  selectArticles,
  (articles: Article[]) => articles.find(article => article.id === articleId)
);
