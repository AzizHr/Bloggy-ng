import { createAction, props } from '@ngrx/store';
import {Author} from "../models/author.model";
import {LoginRequest} from "../models/login-request.model";
import {RegisterRequest} from "../models/register-request.model";
import {ArticleActionTypes} from "../enums/article-action-types";
import {Article} from "../models/article.model";

export const login = createAction(
  '[Login] User Login',
  props<{ loginRequest: LoginRequest }>()
);

export const loginSuccess = createAction(
  '[Login] Login Success',
  props<{ user: Author }>()
);

export const loginFailure = createAction(
  '[Login] Login Failure',
  props<{ error: string }>()
);

export const register = createAction(
  '[Register] User Register',
  props<{ registerRequest: RegisterRequest }>()
);

export const registerSuccess = createAction(
  '[Register] Register Success',
  props<{ user: Author }>()
);

export const registerFailure = createAction(
  '[Register] Register Failure',
  props<{ error: string }>()
);

export const loadUserArticles = createAction('[User Articles] Load User Articles', props<{ page: number, size: number, author: string }>());
export const loadUserArticlesSuccess = createAction('[User Articles] Load User Articles Success', props<{ articles: Article[] }>());
export const loadUserArticlesFailure = createAction('[User Articles] Load User Articles Failure', props<{ error: string }>());
