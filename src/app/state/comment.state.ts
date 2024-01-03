import { CommentResponse } from "../models/comment/comment-response.model";

export interface CommentState {
  comments: CommentResponse[];
}

export const initialState: CommentState = {
  comments: []
}
