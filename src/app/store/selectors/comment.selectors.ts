import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CommentState } from "../../state/comment.state";

export const selectCommentState = createFeatureSelector<CommentState>('comments');

export const selectComments = createSelector(
  selectCommentState,
  (state: CommentState) => state.comments
);
