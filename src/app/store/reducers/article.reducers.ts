import * as ArticleActions from '../actions/article.actions';
import {createReducer, on} from "@ngrx/store";
import { initialState } from "../../state/article.state";


export const articleReducer = createReducer(
  initialState,

  on(ArticleActions.loadArticlesSuccess, (state, { articles }) => ({
    ...state,
    articles: articles,
    error: null
  })),

  on(ArticleActions.loadArticlesFailure, (state, { error }) => ({
    ...state,
    articles: [],
    error: error
  })),

  on(ArticleActions.addArticleSuccess, (state, { article }) => ({
    ...state,
    articles: [...state.articles, article],
    error: null
  })),

  on(ArticleActions.addArticleFailure, (state, { error }) => ({
    ...state,
    error: error
  })),

  on(ArticleActions.updateArticleSuccess, (state, { article }) => {
    const updatedArticles = state.articles.map(a => (a.id === article.id ? article : a));
    return {
      ...state,
      articles: updatedArticles,
      error: null
    };
  }),

  on(ArticleActions.updateArticleFailure, (state, { error }) => ({
    ...state,
    error: error
  })),

  on(ArticleActions.deleteArticleSuccess, (state, { message }) => ({
    ...state,
    articles: state.articles.filter(a => a.id !== message),
    error: null
  })),

  on(ArticleActions.deleteArticleFailure, (state, { error }) => ({
    ...state,
    error: error
  })),

  on(ArticleActions.loadArticleSuccess, (state, { article }) => ({
    ...state,
    articles: [article],
    error: null
  })),

  on(ArticleActions.loadArticleFailure, (state, { error }) => ({
    ...state,
    articles: [],
    error: error
  }))
);
