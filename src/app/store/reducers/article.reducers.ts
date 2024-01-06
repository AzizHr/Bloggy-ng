import { createReducer, on } from '@ngrx/store';
import * as ArticleActions from '../actions/article.actions';
import { ArticleState, initialState } from "../../state/article.state";
import * as CommentActions from "../actions/comment.actions";

export const articleReducer = createReducer(
  initialState,
  on(ArticleActions.loadBArticlesSuccess, (state, { articles }) => ({ ...state, articles })),
  on(ArticleActions.addArticleSuccess, (state, { article }) => ({ ...state, article })),
  on(ArticleActions.updateArticleSuccess, (state, { article }) => ({ ...state, article })),
  on(ArticleActions.deleteArticleSuccess, (state, { id }) => ({ ...state, id })),
  on(CommentActions.addCommentSuccess, (state, { comment }) => ({ ...state, comment })),
  on(CommentActions.updateCommentSuccess, (state, { comment }) => ({ ...state, comment })),
  on(CommentActions.deleteComment, (state, { id }) => ({ ...state, id }))
);

export { ArticleState } from '../../state/article.state';
