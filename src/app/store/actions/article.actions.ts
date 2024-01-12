import { createAction, props } from '@ngrx/store';
import { Article } from "../../models/article.model";
import {ArticleActionTypes} from "../../enums/article-action-types";

export const loadArticles = createAction(ArticleActionTypes.LOAD_ARTICLES, props<{ page: number, size: number }>());
export const loadArticlesSuccess = createAction(ArticleActionTypes.LOAD_ARTICLES_SUCCESS, props<{ articles: Article[] }>());

export const loadArticlesFailure = createAction(ArticleActionTypes.LOAD_ARTICLES_FAILURE, props<{ error: string }>());

export const addArticle = createAction(ArticleActionTypes.ADD_ARTICLE, props<{ article: Article }>());
export const addArticleSuccess = createAction(ArticleActionTypes.ADD_ARTICLE_SUCCESS, props<{ article: Article }>());
export const addArticleFailure = createAction(ArticleActionTypes.ADD_ARTICLE_FAILURE, props<{ error: string }>());

export const updateArticle = createAction(ArticleActionTypes.UPDATE_ARTICLE, props<{ article: Article }>());
export const updateArticleSuccess = createAction(ArticleActionTypes.UPDATE_ARTICLE_SUCCESS, props<{ article: Article }>());
export const updateArticleFailure = createAction(ArticleActionTypes.UPDATE_ARTICLE_FAILURE, props<{ error: string }>());

export const deleteArticle = createAction(ArticleActionTypes.DELETE_ARTICLE, props<{ id: string }>());
export const deleteArticleSuccess = createAction(ArticleActionTypes.DELETE_ARTICLE_SUCCESS, props<{ message: string }>());
export const deleteArticleFailure = createAction(ArticleActionTypes.DELETE_ARTICLE_FAILURE, props<{ error: string }>());

export const loadArticle = createAction(ArticleActionTypes.LOAD_ARTICLE, props<{ id: string }>());
export const loadArticleSuccess = createAction(ArticleActionTypes.LOAD_ARTICLE_SUCCESS, props<{ article: Article }>());
export const loadArticleFailure = createAction(ArticleActionTypes.LOAD_ARTICLE_FAILURE, props<{ error: string }>());

