import { createReducer, on } from '@ngrx/store';
import * as CommentActions from '../actions/comment.actions';
import { CommentState, initialState } from "../../state/comment.state";

export const commentReducer = createReducer(
  initialState,
  on(CommentActions.addCommentSuccess,
    (state, { comment }) =>
      ({ ...state, comment })),
  on(CommentActions.updateCommentSuccess, (state, { comment }) => ({ ...state, comment })),
  on(CommentActions.deleteComment, (state, { id }) => ({ ...state, id }))
);

export { CommentState } from '../../state/comment.state';
