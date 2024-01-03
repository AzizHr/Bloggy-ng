import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import * as CommentActions from '../../actions/comment/comment.actions';
import {CommentService} from "../../../services/comment/comment.service";

@Injectable()
export class CommentEffects {
  loadArticleComments$ = createEffect(() => this.actions$.pipe(
    ofType(CommentActions.loadArticleComments),
    mergeMap((action) => this.commentService.findByArticle(action.article).pipe(
      map(articleComments => CommentActions.loadArticleCommentsSuccess({ articleComments })),
      catchError(async () => CommentActions.loadArticleCommentsFailure())
    ))
  ));

  addBlog$ = createEffect(() => this.actions$.pipe(
    ofType(CommentActions.addComment),
    mergeMap(action => this.commentService.create(action.comment).pipe(
      map(article => CommentActions.addCommentSuccess({ article })),
      catchError(async () => CommentActions.addCommentFailure())
    ))
  ));

  updateBlog$ = createEffect(() => this.actions$.pipe(
    ofType(CommentActions.updateComment),
    mergeMap(action => this.commentService.update(action.comment).pipe(
      map((article) => CommentActions.updateCommentSuccess({ article })),
      catchError(async () => CommentActions.updateCommentFailure())
    ))
  ));

  deleteBlog$ = createEffect(() => this.actions$.pipe(
    ofType(CommentActions.deleteComment),
    mergeMap(action => this.commentService.remove(action.id).pipe(
      map(() => CommentActions.deleteCommentSuccess({ id: action.id })),
      catchError(async () => CommentActions.deleteCommentFailure())
    ))
  ));

  constructor(private actions$: Actions, private commentService: CommentService) {}
}
