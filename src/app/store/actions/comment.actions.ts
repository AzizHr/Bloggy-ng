import { createAction, props } from '@ngrx/store';
import { CommentResponse } from "../../models/comment/comment-response.model";
import { Comment } from "../../models/comment/comment.model";

export const loadArticleComments = createAction('[Comment] Load Article Comments', props<{ articleId: string }>());
export const loadArticleCommentsSuccess = createAction('[Comment] Load Article Comments Success', props<{ comments: CommentResponse[] }>());
export const loadArticleCommentsFailure = createAction('[Comment] Load Article Comments Failure');

export const addComment = createAction('[Comment] Add Comment', props<{ comment: Comment }>());
export const addCommentSuccess = createAction('[Comment] Add Comment Success', props<{ comment: CommentResponse }>());
export const addCommentFailure = createAction('[Comment] Add Comment Failure');

export const updateComment = createAction('[Comment] Update Comment', props<{ comment: Comment }>());
export const updateCommentSuccess = createAction('[Comment] Update Comment Success', props<{ comment: CommentResponse }>());
export const updateCommentFailure = createAction('[Comment] Update Comment Failure');

export const deleteComment = createAction('[Comment] Delete Article', props<{ id: string }>());
export const deleteCommentSuccess = createAction('[Comment] Delete Article Success', props<{ id: string }>());
export const deleteCommentFailure = createAction('[Comment] Delete Article Failure');
