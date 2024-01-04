import { createAction, props } from '@ngrx/store';
import {ArticleResponse} from "../../models/article/article-response.model";
import { Article } from "../../models/article/article.model";

export const loadArticles = createAction('[Article] Load Articles', props<{ page: number, size: number }>());
export const loadBArticlesSuccess = createAction('[Article] Load Articles Success', props<{ articles: ArticleResponse[] }>());
export const loadArticlesFailure = createAction('[Article] Load Articles Failure');

export const addArticle = createAction('[Article] Add Article', props<{ article: Article }>());
export const addArticleSuccess = createAction('[Article] Add Article Success', props<{ article: ArticleResponse }>());
export const addArticleFailure = createAction('[Article] Add Article Failure');

export const updateArticle = createAction('[Article] Update Article', props<{ article: Article }>());
export const updateArticleSuccess = createAction('[Article] Update Article Success', props<{ article: ArticleResponse }>());
export const updateArticleFailure = createAction('[Article] Update Article Failure');

export const deleteArticle = createAction('[Article] Delete Article', props<{ id: string }>());
export const deleteArticleSuccess = createAction('[Article] Delete Article Success', props<{ id: string }>());
export const deleteArticleFailure = createAction('[Article] Delete Article Failure');
