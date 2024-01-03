import { createReducer, on } from '@ngrx/store';
import * as CommentActions from '../actions/comment.actions';
import { CommentState, initialState } from "../../state/comment.state";
import * as ArticleActions from "../actions/article.actions";

export const commentReducer = createReducer(
  initialState,
  on(CommentActions.loadArticleCommentsSuccess, (state, { comments }) => ({ ...state, comments })),
  on(CommentActions.addCommentSuccess, (state, { comment }) => ({ ...state, comment })),
  on(CommentActions.updateCommentSuccess, (state, { comment }) => ({ ...state, comment })),
  on(ArticleActions.deleteArticleSuccess, (state, { id }) => ({ ...state, id }))
);

export { CommentState } from '../../state/comment.state';
